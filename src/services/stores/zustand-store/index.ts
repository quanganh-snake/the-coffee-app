import { create } from 'zustand'
import { produce } from 'immer'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CoffeeData from '../../../data/CoffeeData'
import BeansData from '../../../data/BeansData'
import { InitialStateZustand } from '../../../types/zustand.type'

export const useStore = create(
  persist(
    (set, get): InitialStateZustand => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
      addToCart: (cartItem: any) => set(produce(state => {
        let foundCart: boolean = false
        for (let i = 0; i < state.CartList.length; i++) {
          if (state.CartList[i].id === cartItem.id) {
            foundCart = true
            let size: boolean = false
            for (let j = 0; j < state.CartList[i].prices.length; j++) {
              if (state.CartList[i].prices[j].size === cartItem.prices[0].size) {
                size = true
                state.CartList[i].prices[j].quantity++
                break
              }
            }
            if (size === false) {
              state.CartList[i].prices.push(cartItem.prices[0])
            }
            state.CartList[i].price.sort((a: any, b: any) => {
              if (a.size > b.size) {
                return -1
              }
              if (a.size < b.size) {
                return 1
              }
              return 0
            })
            break
          }
        }

        if (foundCart === false) {
          state.CartList.push(cartItem)
        }
      })),
      calculateCartPrice: () => set(
        produce(state => {
          let totalPrice: number = 0
          for (let i = 0; i < state.CartList.length; i++) {
            let tempPrice = 0
            for (let j = 0; j < state.CartList[i].prices.length; j++) {
              tempPrice += parseFloat(state.CartList[i].prices[j].price) * state.CartList[i].prices[j].quantity
            }
            state.CartList[i].itemPrice = tempPrice.toFixed(2).toString()
            totalPrice += tempPrice
          }
          state.CartPrice = totalPrice.toFixed(2).toString()
        })
      )
      ,
      removeFromCart: (cartItem: any) => {

      },
      addToFavoriteList: (type: string, id: string) =>
        set(
          produce(state => {
            if (type == 'Coffee') {
              for (let i = 0; i < state.CoffeeList.length; i++) {
                if (state.CoffeeList[i].id == id) {
                  if (state.CoffeeList[i].favourite == false) {
                    state.CoffeeList[i].favourite = true;
                    state.FavoritesList.unshift(state.CoffeeList[i]);
                  } else {
                    state.CoffeeList[i].favourite = false;
                  }
                  break;
                }
              }
            } else if (type == 'Bean') {
              for (let i = 0; i < state.BeanList.length; i++) {
                if (state.BeanList[i].id == id) {
                  if (state.BeanList[i].favourite == false) {
                    state.BeanList[i].favourite = true;
                    state.FavoritesList.unshift(state.BeanList[i]);
                  } else {
                    state.BeanList[i].favourite = false;
                  }
                  break;
                }
              }
            }
          }),
        ),
      deleteFavoriteList: (type: string, id: string) =>
        set(
          produce(state => {
            if (type == 'Coffee') {
              for (let i = 0; i < state.CoffeeList.length; i++) {
                if (state.CoffeeList[i].id == id) {
                  if (state.CoffeeList[i].favourite == true) {
                    state.CoffeeList[i].favourite = false;
                  } else {
                    state.CoffeeList[i].favourite = true;
                  }
                  break;
                }
              }
            } else if (type == 'Beans') {
              for (let i = 0; i < state.BeanList.length; i++) {
                if (state.BeanList[i].id == id) {
                  if (state.BeanList[i].favourite == true) {
                    state.BeanList[i].favourite = false;
                  } else {
                    state.BeanList[i].favourite = true;
                  }
                  break;
                }
              }
            }
            let spliceIndex = -1;
            for (let i = 0; i < state.FavoritesList.length; i++) {
              if (state.FavoritesList[i].id == id) {
                spliceIndex = i;
                break;
              }
            }
            state.FavoritesList.splice(spliceIndex, 1);
          }),
        ),

    }),
    { name: 'coffee-app', storage: createJSONStorage(() => AsyncStorage) }
  )
)
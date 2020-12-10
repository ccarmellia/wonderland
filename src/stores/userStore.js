import create from "zustand";
import axios from "axios";
import {BASE_URL} from "../config"
import { sleep } from "../utils/sleep";
import {publishCreation, getAll, getUserStar,getLiteraryOutput,getPictureOutput} from "../utils/requests"

export const useUserStore = create((set) => ({
  //登录
  login: async (username, password) => {
    const { data } = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });
    const user = {
      username: data.user.username,
      token: data.jwt,
    };
    await localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  //登出
  logout: async () => {
    await localStorage.removeItem("user");
    set({ user: undefined });
  },
  //注册
  register: async (username, password) => {
    await sleep(2000);
    const { data } = await axios.post(`${BASE_URL}/register`, {
      username,
      password,
    });
    const user = {
      username: data.user.username,
      token: data.jwt,
    };
    set({ user });
  },
  //获取用户关注列表
  getUserStar: async () => {
    set({userStar:await getUserStar()})
  },
  //获取广场上所有的建筑
  getSquare:async()=>{
    set({squareBuildings:await getAll()})
  },
  getBuidingInfo:async()=>{

  },
  //发布创作
  publishCreation:async(content,buildingName,title,classification)=>{
    set({newWork:await publishCreation(content,buildingName,title,classification)});
  },
  //获取建筑的文字内容
  getLiteraryOutput:async(buildingName)=>{
    set({bulidingWork:await getLiteraryOutput(buildingName)});
  },
  //获取建筑的图片内容
  getPictureOutput:async(buildingName)=>{
    set({bulidingWork:await getPictureOutput(buildingName)});
  },
  setUser: (user) => set({ user }),
  setUserStar:(userStar)=>set({userStar}),
  setSquarebuildings:(squareBuildings)=>set({squareBuildings}),
  setNewWork:(newWork)=>set({newWork}),
  user: undefined,
  userStar:[],
  squareBuildings:[],
  newBuilding:[],
}));

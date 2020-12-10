import axios from 'axios';
import {useUserStore} from '../stores/userStore';
import {BASE_URL} from '../config';
//获取广场数据
export const getAll = async endpoint => {
  const {data} = await axios.get(`${BASE_URL}${endpoint}`)
  return data;
};
//获取用户关注页
export const getUserStar = async() => {
  const {username}=useUserStore.getState().user;
  const {token} = useUserStore.getState().user;
  const {data} = await axios.get(`${BASE_URL}${username}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return data;
};
//获取建筑内部的文字作品
export const getLiteraryOutput = async(buildingName)=>{
  const {data} = await axios.post(`${BASE_URL}${buildingName}`, {
    params:{
      buildingName,
    }
  });
  return data;
};
//获取建筑内部的图片作品
export const getPictureOutput = async(buildingName)=>{
  const {data} = await axios.post(`${BASE_URL}${buildingName}`, {
    params:{
      buildingName,
    }
  });
  return data;
};
//发布作品
export const publishCreation = async(content,buildingName,title,classification)=>{
  const date = new Date();
  const {username}=useUserStore.getState().user;
  const {token} = useUserStore.getState().user;
  const {data} = await axios.post(`${BASE_URL}/buildings${username}`, {
    headers: {
      Authorization: `${token}`,
    },
    params:{
      date,
      title,
      username,
      content,
      buildingName,
      classification,
    }
  });
  return data;
};
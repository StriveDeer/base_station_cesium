package com.daro.dao;

import com.daro.bean.BaseStation;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OnlyDao {

    public List<BaseStation> getBaseStationByDistance(double lat, double lng);

}

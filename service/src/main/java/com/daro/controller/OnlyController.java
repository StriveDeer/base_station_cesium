package com.daro.controller;


import com.daro.bean.BaseStation;
import com.daro.dao.OnlyDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class OnlyController {

    @Autowired
    OnlyDao od;


    @RequestMapping(value = "/getBaseStationByDistance", method = RequestMethod.GET)
    @ResponseBody
    public List<BaseStation> getBaseStationByDistance(@RequestParam("lat") double lat, @RequestParam("lng") double lng) {
        System.out.println(lat + "---" + lng);
        System.out.println(od.getBaseStationByDistance(lat, lng));

        return od.getBaseStationByDistance(lat, lng);
    }
}

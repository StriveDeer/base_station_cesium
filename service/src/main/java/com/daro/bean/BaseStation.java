package com.daro.bean;

public class BaseStation {
    private String MCC;
    private String MNC;
    private String LAC;
    private String CELL;
    private String LNG;
    private String LAT;
    private String O_LNG;
    private String O_LAT;
    private String PRECISION;
    private String ADDRESS;
    private String DAY;
    private String REGION;
    private String CITY;
    private String COUNTRY;
    private String distance_um;

    public BaseStation() {
    }

    public BaseStation(String MCC, String MNC, String LAC, String CELL, String LNG, String LAT, String o_LNG, String o_LAT, String PRECISION, String ADDRESS, String DAY, String REGION, String CITY, String COUNTRY,String distance_um) {
        this.MCC = MCC;
        this.MNC = MNC;
        this.LAC = LAC;
        this.CELL = CELL;
        this.LNG = LNG;
        this.LAT = LAT;
        O_LNG = o_LNG;
        O_LAT = o_LAT;
        this.PRECISION = PRECISION;
        this.ADDRESS = ADDRESS;
        this.DAY = DAY;
        this.REGION = REGION;
        this.CITY = CITY;
        this.COUNTRY = COUNTRY;
        this.distance_um = distance_um;
    }

    public String getDistance_um() {
        return distance_um;
    }

    public void setDistance_um(String distance_um) {
        this.distance_um = distance_um;
    }

    public String getMCC() {
        return MCC;
    }

    public String getMNC() {
        return MNC;
    }

    public String getLAC() {
        return LAC;
    }

    public String getCELL() {
        return CELL;
    }

    public String getLNG() {
        return LNG;
    }

    public String getLAT() {
        return LAT;
    }

    public String getO_LNG() {
        return O_LNG;
    }

    public String getO_LAT() {
        return O_LAT;
    }

    public String getPRECISION() {
        return PRECISION;
    }

    public String getADDRESS() {
        return ADDRESS;
    }

    public String getDAY() {
        return DAY;
    }

    public String getREGION() {
        return REGION;
    }

    public String getCITY() {
        return CITY;
    }

    public String getCOUNTRY() {
        return COUNTRY;
    }

    public void setMCC(String MCC) {
        this.MCC = MCC;
    }

    public void setMNC(String MNC) {
        this.MNC = MNC;
    }

    public void setLAC(String LAC) {
        this.LAC = LAC;
    }

    public void setCELL(String CELL) {
        this.CELL = CELL;
    }

    public void setLNG(String LNG) {
        this.LNG = LNG;
    }

    public void setLAT(String LAT) {
        this.LAT = LAT;
    }

    public void setO_LNG(String o_LNG) {
        O_LNG = o_LNG;
    }

    public void setO_LAT(String o_LAT) {
        O_LAT = o_LAT;
    }

    public void setPRECISION(String PRECISION) {
        this.PRECISION = PRECISION;
    }

    public void setADDRESS(String ADDRESS) {
        this.ADDRESS = ADDRESS;
    }

    public void setDAY(String DAY) {
        this.DAY = DAY;
    }

    public void setREGION(String REGION) {
        this.REGION = REGION;
    }

    public void setCITY(String CITY) {
        this.CITY = CITY;
    }

    public void setCOUNTRY(String COUNTRY) {
        this.COUNTRY = COUNTRY;
    }

    @Override
    public String toString() {
        return "BaseStation{" +
                "MCC='" + MCC + '\'' +
                ", MNC='" + MNC + '\'' +
                ", LAC='" + LAC + '\'' +
                ", CELL='" + CELL + '\'' +
                ", LNG='" + LNG + '\'' +
                ", LAT='" + LAT + '\'' +
                ", O_LNG='" + O_LNG + '\'' +
                ", O_LAT='" + O_LAT + '\'' +
                ", PRECISION='" + PRECISION + '\'' +
                ", ADDRESS='" + ADDRESS + '\'' +
                ", DAY='" + DAY + '\'' +
                ", REGION='" + REGION + '\'' +
                ", CITY='" + CITY + '\'' +
                ", COUNTRY='" + COUNTRY + '\'' +
                ", distance_um='" + distance_um + '\'' +
                '}';
    }
}

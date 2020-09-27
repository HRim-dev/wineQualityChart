package com.hrimDev.service;

import java.util.List;

import com.hrimDev.vo.WineAlcoholVO;
import com.hrimDev.vo.WineQualityVO;

public interface WineQualityService {
	List<WineQualityVO> selectWineQuality() throws Exception;
	List<WineQualityVO> selectWineQuality2() throws Exception;
	List<WineAlcoholVO> selectAlcoholPer() throws Exception;
}
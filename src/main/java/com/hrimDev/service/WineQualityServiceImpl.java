package com.hrimDev.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.hrimDev.dao.WineQualityDAO;
import com.hrimDev.vo.WineAlcoholVO;
import com.hrimDev.vo.WineQualityVO;

@Service
public class WineQualityServiceImpl implements WineQualityService {
 
    @Inject
    private WineQualityDAO dao;
    
    @Override
    public List<WineQualityVO> selectWineQuality() throws Exception {
 
        return dao.selectWineQuality();
    }
    
    @Override
    public List<WineQualityVO> selectWineQuality2() throws Exception {
 
        return dao.selectWineQuality2(9.5);
    }

	@Override
	public List<WineAlcoholVO> selectAlcoholPer() throws Exception {
		return dao.selectAlcoholPer();
	}
}
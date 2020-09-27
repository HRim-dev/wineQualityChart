package com.hrimDev.highchart_pilot;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrimDev.service.WineQualityService;
import com.hrimDev.vo.WineAlcoholVO;
import com.hrimDev.vo.WineQualityVO;

@RestController
public class restController {
private static final Logger logger = LoggerFactory.getLogger(restController.class);
  @Inject
private WineQualityService service;
/**
 * Simply selects the home view to render by returning its name.
 */
@RequestMapping(value = "/restex")
public List<WineQualityVO> wineQualityList() throws Exception{

    logger.info("home");
    
    List<WineQualityVO> wineQualityList = service.selectWineQuality();
    

    return wineQualityList;
}

@RequestMapping(value = "/restex2")
public List<WineQualityVO> wineQualityList2() throws Exception{

    logger.info("home");
    
    List<WineQualityVO> wineQualityList2 = service.selectWineQuality2();
    

    return wineQualityList2;
}

@RequestMapping(value = "/restex3")
public List<WineAlcoholVO> AlcoholPerList() throws Exception{

    logger.info("home");
    
    List<WineAlcoholVO> alcoholList = service.selectAlcoholPer();
    

    return alcoholList;
}
}


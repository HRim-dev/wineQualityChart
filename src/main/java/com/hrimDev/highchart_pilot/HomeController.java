package com.hrimDev.highchart_pilot;

import java.util.List;
import java.util.Locale;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hrimDev.service.WineQualityService;
import com.hrimDev.vo.WineQualityVO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
    
    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
    
   @Inject
   private WineQualityService service;
   //private MovieService service;
    
    /**
     * Simply selects the home view to render by returning its name.
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(Locale locale, Model model) throws Exception{
 
      logger.info("home");

    	//List<WineQualityVO> wineQualityList = service.selectWineQuality();
        //List<WineQualityVO> wineQualityList2 = service.selectWineQuality2();
        //model.addAttribute("wineQualityList", wineQualityList);
        //model.addAttribute("wineQualityList2", wineQualityList2);
        return "home3";
    }

}

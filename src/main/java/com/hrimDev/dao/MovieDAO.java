package com.hrimDev.dao;

import java.util.List;

import com.hrimDev.vo.MovieVO;

public interface MovieDAO {
	//Mapper
	public List<MovieVO> selectMovie() throws Exception;
	
	//read(select)
	public MovieVO read(int id) throws Exception;
}

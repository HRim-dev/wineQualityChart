package com.hrimDev.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.hrimDev.dao.MovieDAO;
import com.hrimDev.vo.MovieVO;

@Service
public class MovieServiceImpl implements MovieService{

	@Inject
	private MovieDAO dao;
	
	@Override
	public List<MovieVO> selectMovie() throws Exception {
		// TODO Auto-generated method stub
		return dao.selectMovie();
	}

	@Override
	public MovieVO read(int id) throws Exception {
		// TODO Auto-generated method stub
		return dao.read(id);
	}

}

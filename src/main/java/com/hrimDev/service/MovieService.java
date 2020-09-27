package com.hrimDev.service;

import java.util.List;

import com.hrimDev.vo.MovieVO;

//비즈니스 로직 담당(프레젠테이션 계층과 영속계층의 중간다리 역할)
//DB처리
public interface MovieService {
	public List<MovieVO> selectMovie() throws Exception;
	
	public MovieVO read(int id) throws Exception;
}

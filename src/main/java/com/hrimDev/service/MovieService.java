package com.hrimDev.service;

import java.util.List;

import com.hrimDev.vo.MovieVO;

//����Ͻ� ���� ���(���������̼� ������ ���Ӱ����� �߰��ٸ� ����)
//DBó��
public interface MovieService {
	public List<MovieVO> selectMovie() throws Exception;
	
	public MovieVO read(int id) throws Exception;
}

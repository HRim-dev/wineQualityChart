package com.hrimDev.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hrimDev.vo.MovieVO;

//movieDAOImpl의 경우 SqlSession을 통해 등록된 SQL 쿼리문을 실행하여 List를 리턴
@Repository
public class MovieDAOimpl implements MovieDAO{

	//@Inject
	@Autowired
	@Resource(name="sqlSession")
	private SqlSession query;
	
	private static final String Namespace="com.hrimDev.mybatis.sql.test";
	
	@Override
	public List<MovieVO> selectMovie() throws Exception {
		// TODO Auto-generated method stub
		return query.selectList(Namespace+".selectMovie");
	}

	@Override
	public MovieVO read(int id) {
		// TODO Auto-generated method stub
		return query.selectOne(Namespace+".read("+id+")");
	}

}

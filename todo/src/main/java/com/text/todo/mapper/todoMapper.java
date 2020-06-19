package com.text.todo.mapper;

import java.util.List;

//이거있으면 내용을 안불러온다
//import com.text.todo.domain.ContentDTO;

import com.text.todo.domain.ContentVO;

public interface todoMapper {
	
	public List<ContentVO> todoList();
	
	public void todoWrite(ContentVO vo);
	
	public void todoUpdate(ContentVO vo);
	
	public int todoDelete(int con_num);
}

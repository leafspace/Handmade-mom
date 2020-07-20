package com.cn.qxcy.HandMadeMom.Servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest.RecommendListItem;
import com.google.gson.Gson;

/**
 * Servlet implementation class HomeGetRecommendListServlet
 */
@WebServlet("/home/getRecommendList")
public class HomeGetRecommendListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HomeGetRecommendListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		RecommendListItem ItemA = new RecommendListItem(1, 1, "", "推荐商品A", "/img/goods.png", 999);
		RecommendListItem ItemB = new RecommendListItem(2, 1, "", "推荐商品B", "/img/goods.png", 888);
		RecommendListItem ItemC = new RecommendListItem(3, 1, "", "推荐商品C", "/img/goods.png", 777);
		RecommendListItem ItemD = new RecommendListItem(4, 1, "", "推荐商品D", "/img/goods.png", 666);
		RecommendListItem ItemE = new RecommendListItem(5, 1, "", "推荐商品E", "/img/goods.png", 555);
		
		ArrayList<RecommendListItem> recommendList = new ArrayList<RecommendListItem>();
		recommendList.add(ItemA);
		recommendList.add(ItemB);
		recommendList.add(ItemC);
		recommendList.add(ItemD);
		recommendList.add(ItemE);
		
		Gson gson = new Gson();
		String strRet = gson.toJson(recommendList);
		
		response.setCharacterEncoding("utf-8");
		response.getWriter().append(strRet);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

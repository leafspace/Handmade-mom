package com.cn.qxcy.HandMadeMom.Servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest.CardListGoodsInfo;
import com.google.gson.Gson;

/**
 * Servlet implementation class CartUpdateCartListServlet
 */
@WebServlet("/cart/updateCartList")
public class CartUpdateCartListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CartUpdateCartListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}
	
	public static class BeanCardListGoodsInfoList
	{
		public ArrayList<CardListGoodsInfo> goodsList;
	};

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
		response.setHeader("Access-Control-Max-Age", "3600");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
		response.setContentType("text/json; charset=utf-8");
		//防止post进来的文字乱码
		request.setCharacterEncoding("utf-8");
		
		StringBuffer stringBuffer = new StringBuffer();
		String line = null;
		BufferedReader reader = request.getReader();
	    while ((line = reader.readLine()) != null)
	    	stringBuffer.append(line);
        String result = stringBuffer.toString();
        
		
		System.out.println("收到消息：" + result);
		
		Gson gson = new Gson();
		BeanCardListGoodsInfoList goodsInfoList = gson.fromJson(result, BeanCardListGoodsInfoList.class);
		for (int i = 0; i < goodsInfoList.goodsList.size(); ++i)
		{
			System.out.println("产品ID：" + goodsInfoList.goodsList.get(i).getGoodsId() + " 购买数量：" + goodsInfoList.goodsList.get(i).getGoodsBuyNum() + " 选中：" + goodsInfoList.goodsList.get(i).isGoodsSelect());
		}
		response.getWriter().append("Hello World");
	}

}

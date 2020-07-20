package com.cn.qxcy.HandMadeMom.Servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest.CardListGoodsInfo;
import com.google.gson.Gson;

/**
 * Servlet implementation class CartGetCartListServlet
 */
@WebServlet("/cart/getCartList")
public class CartGetCartListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CartGetCartListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		CardListGoodsInfo goodsInfoA = new CardListGoodsInfo("商品名称A", "GOOD", 8, 3235, 999, "商品详情", "制作教程");
		CardListGoodsInfo goodsInfoB = new CardListGoodsInfo("商品名称B", "GOOD", 8, 3235, 888, "商品详情", "制作教程");
		CardListGoodsInfo goodsInfoC = new CardListGoodsInfo("商品名称C", "GOOD", 8, 3235, 777, "商品详情", "制作教程");
		
		goodsInfoA.setGoodsId(1);
		goodsInfoB.setGoodsId(2);
		goodsInfoC.setGoodsId(3);
		
		goodsInfoA.setGoodsBuyNum(1);
		goodsInfoB.setGoodsBuyNum(1);
		goodsInfoC.setGoodsBuyNum(1);
		
		goodsInfoA.setGoodsImgUrl("http://localhost:8080/HandMadeMom/media/image/20200702165011.jpg");
		goodsInfoB.setGoodsImgUrl("http://localhost:8080/HandMadeMom/media/image/20200702165011.jpg");
		goodsInfoC.setGoodsImgUrl("http://localhost:8080/HandMadeMom/media/image/20200702165011.jpg");
		
		ArrayList<CardListGoodsInfo> cartList = new ArrayList<CardListGoodsInfo>();
		cartList.add(goodsInfoA);
		cartList.add(goodsInfoB);
		cartList.add(goodsInfoC);
		
		Gson gson = new Gson();
		String strRet = gson.toJson(cartList);
		
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

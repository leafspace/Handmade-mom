package com.cn.qxcy.HandMadeMom.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest.GoodsInfo;
import com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest.VedioUrls;
import com.google.gson.Gson;

/**
 * Servlet implementation class DetailsGetGoodsInfoServlet
 */
@WebServlet("/details/getGoodsInfo")
public class DetailsGetGoodsInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DetailsGetGoodsInfoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		GoodsInfo goodsInfo = new GoodsInfo("商品名称ABCDEFG", "GOOD", 8, 3235, 999, "商品详情", "制作教程");
		VedioUrls vedioUrls = new VedioUrls("", "http://localhost:8080/HandMadeMom/media/vedio/WIN_20200702_19_55_16_Pro.mp4");
		goodsInfo.setGoodsDetailsVedioUrls(vedioUrls);
		goodsInfo.setGoodsTotorialVedioUrls(vedioUrls);
		
		Gson gson = new Gson();
		String strRet = gson.toJson(goodsInfo);
		
		response.setCharacterEncoding("utf-8");
		response.getWriter().append(strRet);
		
		System.out.println("产品ID：" + request.getParameter("goodsId"));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

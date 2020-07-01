package com.cn.qxcy.HandMadeMom.Servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.cn.qxcy.HandMadeMom.ToolBean.ClientRequest.ImgUrls;


/**
 * Servlet implementation class HomeGetBannerImageServlet
 */
@WebServlet("/home/getBannerImage")
public class HomeGetBannerImageServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HomeGetBannerImageServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		ImgUrls bannerA = new ImgUrls("", "http://localhost:8080/HandMadeMom/media/image/card-bg-3.jpg");
		ImgUrls bannerB = new ImgUrls("", "http://localhost:8080/HandMadeMom/media/image/card-bg-3.jpg");
		ImgUrls bannerC = new ImgUrls("", "http://localhost:8080/HandMadeMom/media/image/card-bg-3.jpg");
		
		ArrayList<ImgUrls> listBannerImgUrls = new ArrayList<ImgUrls>();
		listBannerImgUrls.add(bannerA);
		listBannerImgUrls.add(bannerB);
		listBannerImgUrls.add(bannerC);
		
		Gson gson = new Gson();
		String strRet = gson.toJson(listBannerImgUrls);
		
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

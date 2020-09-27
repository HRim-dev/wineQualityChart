<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
 
<title>Home</title>
    <%@include file="./common_resource.jsp"%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/home3.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/alcoholBarChart.js"></script>

	<script src="${pageContext.request.contextPath}/resources/highcharts/code/highcharts.js"></script>
	<script src="${pageContext.request.contextPath}/resources/highcharts/code/modules/data.js"></script>
	<script src="${pageContext.request.contextPath}/resources/highcharts/code/modules/drilldown.js"></script>
	<script src="${pageContext.request.contextPath}/resources/highcharts/code/modules/exporting.js"></script>
	<script src="${pageContext.request.contextPath}/resources/highcharts/code/modules/export-data.js"></script>
	<script src="${pageContext.request.contextPath}/resources/highcharts/code/modules/accessibility.js"></script>

<link href="${pageContext.request.contextPath}/resources/css/home2.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/resources/css/practice.css" rel="stylesheet" />
    <%-- <link href="${pageContext.request.contextPath}/resources/css/chart.css" rel="stylesheet" /> --%>
</head>
<body>
    <h3>와인 데이터 분석</h3>
    <button id="btn1">분석차트 확인</button>
	<figure class="highcharts-figure">
    <div id="container"></div>
    </figure>
    
    <h3>와인 등급별 품질 평균 지수</h3>
    <button id = "load_wineQualityList" type = "button">와인 등급별 품질 평균 지수</button>
    <table>
        <thead>
            <tr>
                <th>등급</th>
                <th>pH</th>
                <th>Fixed Acidity</th>
                <th>Volatile Acidity</th>
     			<th>Alcohol</th>
            </tr>
        </thead>
        <tbody id ="wineQualityList" >
            
        </tbody>
    </table>
</body>
</html>
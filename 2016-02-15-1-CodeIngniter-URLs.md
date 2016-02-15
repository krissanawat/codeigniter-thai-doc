---
title: 1 CodeIngniter URLs
layout: post
author: taqmaninw
permalink: /1-codeingniter-urls/
source-id: 1lbPJp3M2XCEhwo9Kw5ZZl1wVwA-1VuT0Wy5D8Kc__0k
published: true
---
**CodeIngniter URLs**

Url ปกติที่ใช้ใน CodeIngniter ผู้ใช้สามารถดูแล้วรู้เรื่อง มันจะดีกว่าที่จะใช้ url แบบเดิมๆ ที่ยาวและยากแก่การเข้าใจ CodeIngniter ใช้เป็นพื้นฐานการแยกเป็นส่วน ในการเข้าถึงค่าที่อยู่ใน URL อย่างเช่น

	website.com/news/article/sub_article

พื้นฐาน URL CodeIngniter จะเรียกใช้ คือ :

	[http://localhost/ci/index.php/class/function](http://localhost/ci/index.php/class/function)

**ตัวอย่างในการสร้างคลาสและฟังชันก์**

ใน folder    controller ทำการสร้างไฟล์ php

Code : index.php

	<?php

	defined('BASEPATH') OR exit('No direct script access allowed');

	class index extends CI_Controller{

		public function hello(){

			$this->load->view('hello_world');

              }

}

**คำอธิบายโค้ด :**  ในโฟล์เดอร์  controller ทำได้สร้างไฟล์ที่ชื่อว่า index.php ในไฟล์ index.php ได้ทำการสร้าง class ที่ชื่อว่า index (ชื่อคลาสจะต้องตรงกับชื่อไฟล์) และทำการสร้าง function ชื่อว่า hello() ในฟังก์ชัน hello() ทำการเรียกไฟล์ใน folder views ที่ชื่อว่า hello_world.php โค้ด $this->load->view('hello_world');

	จากนั้นในโฟล์เดอร์ views ก็ต้องสร้างไฟล์ที่ชื่อว่า hello_world.php เพื่อให้ function controller เรียกใช้

Code : hello_world.php

	<?php

		echo "hello world";

		echo "<hr>";

URL ในการเรียกใช้งานเพื่อทดสอบการแสดงผล คือ 

	[http://localhost/ci/index.php/index/hello_world](http://localhost/ci/index.php/index/hello_world)

ผลลัพธ์ โค้ด และ การแสดงผล

โค้ดในไฟล์ Controller 

![image alt text]({{ site.url }}/public/uCoXjJLSvukkH5M2Wsyw4A_img_0.png)

โค้ดในโฟล์เดอร์ views

![image alt text]({{ site.url }}/public/uCoXjJLSvukkH5M2Wsyw4A_img_1.png)

ผลลัพธ์บน browser

![image alt text]({{ site.url }}/public/uCoXjJLSvukkH5M2Wsyw4A_img_2.png)


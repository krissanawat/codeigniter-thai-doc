function create_menu(basepath){
	var base = (basepath == 'null') ? '' : basepath;
	document.write(
		'<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr>' +
		'<td class="td" valign="top">' +

		'<ul>' +
		'<li><a href="'+base+'index.html">หน้าหลักคู่มือการใช้งาน</a></li>' +
		'<li><a href="'+base+'toc.html">ตารางเนื้อหา</a></li>' +
		'</ul>' +

		'<h3>ข้อมูลเบื้องต้น</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/requirements.html">ความต้องการของเซิร์ฟเวอร์</a></li>' +
			'<li><a href="'+base+'license.html">ข้อตกลงในการนำไปใช้</a></li>' +
			'<li><a href="'+base+'changelog.html">บันทึกการเปลี่ยนแปลง</a></li>' +
			'<li><a href="'+base+'general/credits.html">ผู้จัดทำ</a></li>' +
		'</ul>' +

		'<h3>การติดตั้ง</h3>' +
		'<ul>' +
			'<li><a href="'+base+'installation/downloads.html">ดาวน์โหลด CodeIgniter</a></li>' +
			'<li><a href="'+base+'installation/index.html">ขั้นตอนการติดตั้ง</a></li>' +
			'<li><a href="'+base+'installation/upgrading.html">อัพเกรดจากเวอร์ชั่นเก่า</a></li>' +
			'<li><a href="'+base+'installation/troubleshooting.html">การแก้ไขปัญหาการติดตั้ง</a></li>' +
		'</ul>' +

		'<h3>แนะนำตัว</h3>' +
		'<ul>' +
			'<li><a href="'+base+'overview/getting_started.html">เริ่มต้นกับ Codeigniter</a></li>' +
			'<li><a href="'+base+'overview/at_a_glance.html">ชำเลืองมอง CodeIgniter</a></li>' +
			'<li><a href="'+base+'overview/cheatsheets.html">แผ่นโกง CodeIgniter</a></li>' +
			'<li><a href="'+base+'overview/features.html">คุณสมบัติเด่นที่สนับสนุน</a></li>' +
			'<li><a href="'+base+'overview/appflow.html">ขั้นตอนการทำงานของแอพพลิเคชั่น</a></li>' +
			'<li><a href="'+base+'overview/mvc.html">Model-View-Controller</a></li>' +
			'<li><a href="'+base+'overview/goals.html">จุดมุ่งหมายของสถาปัตยกรรม</a></li>' +
		'</ul>' +
		
		'<h3>สอนใช้งาน</h3>' +
		'<ul>' +
			'<li><a href="'+base+'tutorial/index.html">Introduction</a></li>' +
			'<li><a href="'+base+'tutorial/static_pages.html">Static pages</a></li>' +
			'<li><a href="'+base+'tutorial/news_section.html">News section</a></li>' +
			'<li><a href="'+base+'tutorial/create_news_items.html">Create news items</a></li>' +
			'<li><a href="'+base+'tutorial/conclusion.html">Conclusion</a></li>' +
		'</ul>' +
		
		'</td><td class="td_sep" valign="top">' +

		'<h3>เรื่องทั่วไป</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/urls.html">CodeIgniter URLs</a></li>' +
			'<li><a href="'+base+'general/controllers.html">Controllers (ตัวควบคุม)</a></li>' +
			'<li><a href="'+base+'general/reserved_names.html">คำสงวน</a></li>' +
			'<li><a href="'+base+'general/views.html">Views (ส่วนแสดง)</a></li>' +
			'<li><a href="'+base+'general/models.html">Models (แบบจำลอง)</a></li>' +
			'<li><a href="'+base+'general/helpers.html">Helpers (ผู้ช่วย)</a></li>' +
			'<li><a href="'+base+'general/libraries.html">วิธีใช้ไลบรารี่ของ CodeIgniter</a></li>' +
			'<li><a href="'+base+'general/creating_libraries.html">สร้างไลบรารี่ของคุณเอง</a></li>' +
			'<li><a href="'+base+'general/drivers.html">การใช้ไดร์เวอร์ใน CodeIgniter</a></li>' +
			'<li><a href="'+base+'general/creating_drivers.html">Creating Your Own Drivers</a></li>' +
			'<li><a href="'+base+'general/core_classes.html">สร้างคลาสสำหรับส่วนสำคัญของระบบ</a></li>' +
			'<li><a href="'+base+'general/hooks.html">Hooks (ตะขอ) - ขยายระบบหลัก</a></li>' +
			'<li><a href="'+base+'general/autoloader.html">การโหลดทรัพยากรแบบอัตโนมัติ</a></li>' +
			'<li><a href="'+base+'general/common_functions.html">ฟังก์ชันทั่วไป</a></li>' +
			'<li><a href="'+base+'general/routing.html">การกำหนดเส้นทาง URI</a></li>' +
			'<li><a href="'+base+'general/errors.html">รับมือกับข้อผิดพลาด</a></li>' +
			'<li><a href="'+base+'general/caching.html">เก็บข้อมูลไว้ในหน่วยความจำ (Caching)</a></li>' +
			'<li><a href="'+base+'general/profiling.html">รวบรวมข้อมูลในแอพพลิเคชั่นของคุณ</a></li>' +
			'<li><a href="'+base+'general/cli.html">Running via the CLI</a></li>' +
			'<li><a href="'+base+'general/managing_apps.html">จัดการหลายแอพพลิเคชั่น</a></li>' +
			'<li><a href="'+base+'general/environments.html">Handling Multiple Environments</a></li>' +
			'<li><a href="'+base+'general/alternative_php.html">ทางเลือกการเขียนไวยากรณ์ PHP</a></li>' +
			'<li><a href="'+base+'general/security.html">ระบบรักษาความปลอดภัย</a></li>' +
			'<li><a href="'+base+'general/styleguide.html">แนะนำวิธีเขียน PHP</a></li>' +
			'<li><a href="'+base+'doc_style/index.html">แบบเขียนเอกสาร</a></li>' +
		'</ul>' +

		'<h3>แหล่งข้อมูลเพิ่มเติม</h3>' +
		'<ul>' +
		'<li><a href="http://codeigniter.in.th/forum">.in.th Forums</a></li>' +
		'<li><a href="http://codeigniter.com/forums">.com Forums</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>เอกสารอ้างอิงคลาส</h3>' +
		'<ul>' +
		'<li><a href="'+base+'libraries/benchmark.html">Benchmarking Class</a></li>' +
		'<li><a href="'+base+'libraries/calendar.html">Calendar Class</a></li>' +
		'<li><a href="'+base+'libraries/cart.html">Cart Class</a></li>' +
		'<li><a href="'+base+'libraries/config.html">Config Class</a></li>' +
		'<li><a href="'+base+'libraries/email.html">Email Class</a></li>' +
		'<li><a href="'+base+'libraries/encryption.html">Encryption Class</a></li>' +
		'<li><a href="'+base+'libraries/file_uploading.html">File Uploading Class</a></li>' +
		'<li><a href="'+base+'libraries/form_validation.html">Form Validation Class</a></li>' +
		'<li><a href="'+base+'libraries/ftp.html">FTP Class</a></li>' +
		'<li><a href="'+base+'libraries/table.html">HTML Table Class</a></li>' +
		'<li><a href="'+base+'libraries/image_lib.html">Image Manipulation Class</a></li>' +
		'<li><a href="'+base+'libraries/input.html">Input Class</a></li>' +
		'<li><a href="'+base+'libraries/javascript.html">Javascript Class</a></li>' +
		'<li><a href="'+base+'libraries/loader.html">Loader Class</a></li>' +
		'<li><a href="'+base+'libraries/language.html">Language Class</a></li>' +
		'<li><a href="'+base+'libraries/migration.html">Migration Class</a></li>' +
		'<li><a href="'+base+'libraries/output.html">Output Class</a></li>' +
		'<li><a href="'+base+'libraries/pagination.html">Pagination Class</a></li>' +
		'<li><a href="'+base+'libraries/security.html">Security Class</a></li>' +
		'<li><a href="'+base+'libraries/sessions.html">Session Class</a></li>' +
		'<li><a href="'+base+'libraries/trackback.html">Trackback Class</a></li>' +
		'<li><a href="'+base+'libraries/parser.html">Template Parser Class</a></li>' +
		'<li><a href="'+base+'libraries/typography.html">Typography Class</a></li>' +
		'<li><a href="'+base+'libraries/unit_testing.html">Unit Testing Class</a></li>' +
		'<li><a href="'+base+'libraries/uri.html">URI Class</a></li>' +
		'<li><a href="'+base+'libraries/user_agent.html">User Agent Class</a></li>' +
		'<li><a href="'+base+'libraries/xmlrpc.html">XML-RPC Class</a></li>' +
		'<li><a href="'+base+'libraries/zip.html">Zip Encoding Class</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>เอกสารอ้างอิงไดร์เวอร์</h3>' +
		'<ul>' +
		'<li><a href="'+base+'libraries/caching.html">Caching Class</a></li>' +
		'<li><a href="'+base+'database/index.html">Database Class</a></li>' +
		'<li><a href="'+base+'libraries/javascript.html">Javascript Class</a></li>' +
		'</ul>' +

		'<h3>เอกสารอ้างอิงตัวช่วย</h3>' +
		'<ul>' +
		'<li><a href="'+base+'helpers/array_helper.html">Array Helper</a></li>' +
		'<li><a href="'+base+'helpers/captcha_helper.html">CAPTCHA Helper</a></li>' +
		'<li><a href="'+base+'helpers/cookie_helper.html">Cookie Helper</a></li>' +
		'<li><a href="'+base+'helpers/date_helper.html">Date Helper</a></li>' +
		'<li><a href="'+base+'helpers/directory_helper.html">Directory Helper</a></li>' +
		'<li><a href="'+base+'helpers/download_helper.html">Download Helper</a></li>' +
		'<li><a href="'+base+'helpers/email_helper.html">Email Helper</a></li>' +
		'<li><a href="'+base+'helpers/file_helper.html">File Helper</a></li>' +
		'<li><a href="'+base+'helpers/form_helper.html">Form Helper</a></li>' +
		'<li><a href="'+base+'helpers/html_helper.html">HTML Helper</a></li>' +
		'<li><a href="'+base+'helpers/inflector_helper.html">Inflector Helper</a></li>' +
		'<li><a href="'+base+'helpers/language_helper.html">Language Helper</a></li>' +
		'<li><a href="'+base+'helpers/number_helper.html">Number Helper</a></li>' +
		'<li><a href="'+base+'helpers/path_helper.html">Path Helper</a></li>' +
		'<li><a href="'+base+'helpers/security_helper.html">Security Helper</a></li>' +
		'<li><a href="'+base+'helpers/smiley_helper.html">Smiley Helper</a></li>' +
		'<li><a href="'+base+'helpers/string_helper.html">String Helper</a></li>' +
		'<li><a href="'+base+'helpers/text_helper.html">Text Helper</a></li>' +
		'<li><a href="'+base+'helpers/typography_helper.html">Typography Helper</a></li>' +
		'<li><a href="'+base+'helpers/url_helper.html">URL Helper</a></li>' +
		'<li><a href="'+base+'helpers/xml_helper.html">XML Helper</a></li>' +
		'</ul>' +

		'</td></tr></table>');
}
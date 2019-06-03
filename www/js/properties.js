var selectedYear = ""
,selectedUrl=""
,isApp=false
,defaultPdfUrl = ""
,selectedChapter = ""
,highlightRender =""
.highlightText = ""
,globalSearchKeyword =""
,triggerCreate=false
,LOADING_MODAL_PROP={backdrop: 'static', keyboard: false}
;
//var pdfLink ="";

var pdfLink = {
	"2015": {
        "cover" : "cover2015.png",
        "title": "Bersinergi Mengawal Stabilitas, Mewujudkan Reformasi Struktural",
		"prakata" : "Perubahan konstelasi ekonomi global sejak krisis 2008 lalu, yang terasa begitu luas dan mendalam, telah memunculkan "+
					"berbagai tantangan baru yang semakin komplek dalam pengelolaan stabilitas makroekonomi. Di tengah berbagai upaya yang terus ditempuh "+
					"untuk mengatasi berbagai permasalahan struktural di dalam negeri, perekonomian Indonesia selama tahun 2015 dihadapkan pada rangkaian "+
					"kejutan eksternal dalam perekonomian global, yang berdampak ke Indonesia baik melalui jalur keuangan maupun perdagangan. "+
					"Pemulihan ekonomi global ternyata tidak sesuai harapan, berjalan lambat, tidak berimbang, dan masih penuh ketidakpastian. "+
					"Negara maju, terutama perekonomian Amerika Serikat memperlihatkan pemulihan yang lebih solid. Sedangkan perekonomian negara "+
					"berkembang, terutama Tiongkok, mengalami perlambatan struktural sehingga memicu kemerosotan harga komoditas, yang pada "+
					"gilirannya terus menekan kinerja ekspor Indonesia. Ketidakseimbangan dalam pemulihan ekonomi global tersebut mengakibatkan terjadinya "+
					"divergensi siklus kebijakan moneter antara berbagai negara. Kebijakan moneter di Amerika Serikat mulai memasuki periode normalisasi, "+
					"setelah dalam kurun waktu enam tahun suku bunga dipertahankan sekitar nol persen. Sedangkan, kebijakan moneter di Eropa, Jepang, "+
					"dan negara berkembang semakin diperlonggar untuk menahan agar laju pertumbuhan ekonomi tidak semakin melambat. "+
					"Kemerosotan harga komoditas yang semakin berdampak terhadap memburuknya kinerja ekonomi negara berkembang dan ketidakpastian mengenai "+
					"kecepatan dan besarnya kenaikkan suku bunga di Amerika Serikat menjadi dua kekuatan utama yang mewarnai rangkaian gejolak di pasar keuangan "+
					"global selama tahun 2015, yang pada gilirannya berdampak pada menurunnya arus modal ke negara berkembang termasuk ke Indonesia. ​",
		"content": [{
						"title": "Cover, Daftar isi dan Prakata",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/1_CoverDaftarIsiPrakata.pdf",
						"desc": "",
						"class" : ""
					},
					{
						"title": "Tinjauan Umum",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/2_TinjauanUmum.pdf",
						"desc": "",
						"class" : ""
					},
					{
						"title": "Bagian I - Perekonomian Global",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/3_Bagian_I.pdf",
						"desc": "",
						"class" : "indent"
					},
					{
						"title": "Bagian II - Perekonomian Domestik",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/4_Bagian_II.pdf",
						"desc": "",
						"class" : "indent"
					},
					{
						"title": "Bagian III - Respons Bauran Kebijakan",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/5_Bagian_III.pdf",
						"desc": "",
						"class" : "indent"
					},
					{
						"title": "Bagian IV - Tantangan, Arah Kebijakan dan Prospek Perekonomian Indonesia",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/6_Bagian_IV.pdf",
						"desc": "",
						"class" : "indent"
					},
					{
						"title": "Lampiran",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/7_Lampiran.pdf",
						"desc": "",
						"class" : ""
					},
					{
						"title": "Versi Lengkap",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/LPI_2015_web_final.pdf",
						"desc": "",
						"class" : ""
					}
				]
	},"2016": {
        "cover" : "cover2016.png",
        "title": "Bersinergi Memperkuat Resiliensi, Mendorong Momentum Pemulihan Ekonomi",
        "prakata" : "Tahun 2016 yang pada awalnya diharapkan menjadi tahun percepatan pemulihan ekonomi "+
                    "domestik kembali menjadi tahun yang penuh tantangan seiring dengan perkembangan global yang masih "+
                    "belum menggembirakan. Ekonomi global masih belum pulih seperti yang diharapkan dan tetap diwarnai "+
                    "ketidakpastian. Dinamika ekonomi global pada 2016 berkisar pada tiga permasalahan utama yang "+
                    "terjadi sejak 2015, yaitu pertumbuhan ekonomi dunia yang belum kuat, harga komoditas yang masih "+
                    "rendah, dan ketidakpastian pasar keuangan yang tetap tinggi.",
		"content": [{
						"title": "Cover, Daftar isi dan Prakata",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/1_LPI2016-Cover-Daftar-Isi-Prakata.pdf",
						"desc": "",
						"class" : ""
					},
					{
						"title": "Tinjauan Umum",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/2_LPI2016-Tinjauan-Umum.pdf",
						"desc": "",
						"class" : ""
					},
					{
						"title": "Bagian I",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/3_LPI2016-Bagian-I.pdf",
						"desc": "",
						"class" : "indent"
					},
					{
						"title": "Bagian II",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/4_LPI2016-Bagian-II.pdf",
						"desc": "",
						"class" : "indent"
					},
					{
						"title": "Bagian III",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/5_LPI2016-Bagian-III.pdf",
						"desc": "",
						"class" : "indent"
					},
					{
						"title": "Bagian IV",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/6_LPI2016-Bagian-IV.pdf",
						"desc": "",
						"class" : "indent"
					},
					{
						"title": "Lampiran",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/7_LPI2016-Lampiran.pdf",
						"desc": "",
						"class" : "indent"
					},
					{
						"title": "Versi Lengkap",
						"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/LPI2016-web.pdf",
						"desc": "",
						"class" : ""
					}
				]
	},
	"2017": {
        "cover" : "cover2017.png",
        "title": "Mengoptimalkan Momentum, Memperkuat Struktur",
        "prakata" : "Ketika saya mulai memimpin Bank Indonesia pada 2013, perekonomian sedang menghadapi "+
                    "meningkatnya ketidakpastian pasar keuangan global terkait perubahan arah kebijakan "+
                    "moneter AS atau yang dikenal sebagai taper tantrum. Kondisi tersebut diperberat oleh "+
                    "perekonomian domestik yang sedang mengalami ketidakseimbangan baik internal maupun eksternal. "+
                    "Hal tersebut antara lain tercermin pada tekanan inflasi yang meningkat, pertumbuhan ekonomi "+
                    "yang melambat, defisit transaksi berjalan yang melebar, serta nilai tukar yang melemah cukup tajam."+
                    "Pada tahun-tahun berikutnya, perubahan arah kebijakan moneter AS terus berlanjut dengan kenaikan "+
                    "Fed Funds Rate dan pengurangan neraca bank sentral. Perkembangan tersebut belum ada presedennya "+
                    "yang dapat menjadi kompas dalam menentukan respons kebijakan yang mampu memitigasi rambatan "+
                    "risiko dan sekaligus mendorong perbaikan ekonomi domestik. Melihat kembali pada tahun-tahun itu, "+
                    "kita patut bersyukur bahwa pilihan fokus kebijakan untuk stabilisasi perekonomian yang ditempuh "+
                    "secara konsisten mampu membawa perekonomian Indonesia secara berangsur terus membaik. ",
		"content": [{
				"title": "Cover",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/1_LPI2017_COVER.pdf",
				"desc": "",
				"class" : ""
			},
			{
				"title": "Tinjauan Umum",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/2_LPI2017_TINJAUAN-UMUM.pdf",
				"desc": "",
				"class" : ""
			},
			{
				"title": "Bab 1",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/3_LPI2017_BAB1.pdf",
				"desc": "",
				"class" : "indent"
			},
			{
				"title": "Bab 2",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/4_LPI2017_BAB2.pdf",
				"desc": "",
				"class" : "indent"
			},
			{
				"title": "Bab 3",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/5_LPI2017_BAB3.pdf",
				"desc": "",
				"class" : "indent"
			},
			{
				"title": "Bab 4",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/6_LPI2017_BAB4.pdf",
				"desc": "",
				"class" : "indent"
			},
			{
				"title": "Bab 5",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/7_LPI2017_BAB5.pdf",
				"desc": "",
				"class" : "indent"
			},
			{
				"title": "Bab 6",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/8_LPI2017_BAB6.pdf",
				"desc": "",
				"class" : "indent"
			},
			{
				"title": "Bab 7",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/9_LPI2017_BAB7.pdf",
				"desc": "",
				"class" : "indent"
			},
			{
				"title": "Bab 8",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/10_LPI2017_BAB8.pdf",
				"desc": "",
				"class" : "indent"
			},
			{
				"title": "Bab 9",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/11_LPI2017_BAB9.pdf",
				"desc": "",
				"class" : "indent"
			},
			{
				"title": "Bab 10",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/12_LPI2017_BAB10.pdf",
				"desc": "",
				"class" : "indent"
			},
			{
				"title": "Lampiran",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/13_LPI2017_LAMPIRAN.pdf",
				"desc": "",
				"class" : ""
			}
		]
	},
	"2018": {
        "cover" : "cover2018.jpg",
        "title": "Sinergi untuk ketahanan dan pertumbuhan",
		"prakata" : "Seraya memanjatkan puji syukur ke hadirat Tuhan Yang Maha Esa, atas nama Dewan Gubernur Bank Indonesia, "+
					"saya persembahkan buku Laporan Perekonomian Indonesia 2018. Buku ini memuat evaluasi menyeluruh perkembangan ekonomi "+
					"Indonesia dan respons kebijakan yang ditempuh Bank Indonesia selama tahun 2018, serta prospek ekonomi dan arah "+
					"kebijakan Bank Indonesia pada tahun 2019. Publikasi buku ini sekaligus sebagai perwujudan akuntabilitas dan "+
					"transparansi Bank Indonesia sebagaimana diamanatkan dalam Undang-Undang Bank Indonesia.",
		"prakataLink" : "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/1_LPI2018_COVER-DAFTARISI-PRAKATA.pdf#page=18",
		"content": [
			// {
			// 	"title": "Cover",
			// 	"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/1_LPI2018_COVER-DAFTARISI-PRAKATA.pdf",
			// 	"desc": "",
			// 	"class" : ""
			// },
			{
				"title": "Tinjauan Umum",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/2_LPI2018_TINJAUAN-UMUM.pdf",
				"desc": "Perekonomian Indonesia 2018 tetap kuat di tengah ketidakpastian global yang meningkat. Sinergi kebijakan Bank Indonesia, Pemerintah, dan otoritas terkait mampu mengawal ketahanan ekonomi dan mendorong berlanjutnya momentum pertumbuhan ekonomi. Ke depan, perekonomian Indonesia diprakirakan lebih baik dengan ditopang struktur ekonomi yang berimbang dan kuat.",
				"class" : ""
			},
			{
				"title": "Bab 1 Perekonomian Global",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/3_LPI2018_BAB1.pdf",
				"desc": "Perekonomian global 2018 ditandai ketidakpastian yang meningkat dipicu tiga perkembangan yang kurang menguntungkan. Pertama, pertumbuhan ekonomi dunia melambat dari 3,8% pada 2017 menjadi 3,7% pada 2018. Pertumbuhan ekonomi yang melambat kemudian menurunkan pertumbuhan volume perdagangan dunia dan harga komoditas global. Kedua, suku bunga Federal Funds Rate (FFR) naik lebih cepat dan lebih tinggi dari respons tahun sebelumnya, sehingga memicu risiko pembalikan aliran modal dari negara berkembang. Ketiga, ketidakpastian pasar keuangan global meningkat dipicu beberapa faktor seperti peningkatan ketegangan perdagangan Amerika Serikat (AS) dengan Tiongkok dan negara lain, risiko geopolitik seperti perundingan Brexit dan krisis di beberapa negara berkembang seperti Argentina dan Turki. Ketiga faktor ini kemudian mendorong investor global menarik dananya dan mengancam stabilitas eksternal negara berkembang. Mata uang berbagai negara melemah tajam terhadap dolar AS dan menimbulkan kerentanan instabilitas makroekonomi dan sistem keuangan."+
						"<br/><br/>Ketidakpastian ekonomi global mendorong beragam respons dari berbagai negara dengan mengoptimalkan interaksi kebijakan moneter dan fiskal. Di negara maju, sebagian negara maju non-AS mengambil kebijakan moneter bias longgar untuk menjaga momentum pertumbuhan. Sementara itu, konsolidasi fiskal negara maju berlangsung perlahan, kecuali AS yang melakukan stimulus fiskal dalam jumlah besar. Di negara berkembang, tantangan terbesar dalam kebijakan ekonomi adalah dalam mengoptimalkan bauran kebijakan moneter dan fiskal untuk merespons peningkatan risiko eksternal. Sebagian besar negara berkembang menempuh kebijakan moneter ketat sebagai respons terhadap pengetatan kebijakan moneter global yang memicu arus modal keluar. Di sisi lain, kebijakan fiskal terus diseimbangkan untuk menjaga pertumbuhan ekonomi sekaligus menjaga sustainabilitas fiskal. "+
						"<br/><br/>Reformasi struktural di berbagai negara juga dilanjutkan untuk mendukung pertumbuhan ekonomi yang berkelanjutan. Reformasi struktural ditujukan untuk mendorong produktivitas, memperbaiki permasalahan sektor tenaga kerja, dan meningkatkan pertumbuhan ekonomi potensial yang terbatas akibat penuaan populasi. Kerja sama internasional juga diperkuat baik yang bersifat bilateral, regional, maupun multilateral. Kerjasama internasional ditujukan untuk mencapai pertumbuhan ekonomi yang kuat, berimbang, dan berkesinambungan, dengan tetap menjaga resiliensi perekonomian.",
				"class" : "indent"
			},
			{
				"title": "Bab 2 Pertumbuhan Ekonomi",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/4_LPI2018_BAB%202.pdf",
				"desc": "Momentum pemulihan ekonomi Indonesia berlanjut pada 2018. Pertumbuhan ekonomi 2018 tercatat 5,17%, meningkat dibandingkan dengan pertumbuhan tahun sebelumnya sebesar 5,07% (Grafik 2.1) dan merupakan pertumbuhan tertinggi sejak 2013. Secara umum, kinerja tersebut menunjukkan perekonomian Indonesia tetap solid, mengingat pada saat bersamaan pertumbuhan ekonomi dunia 2018 dalam tren melambat dan ketidakpastian global sedang meningkat. "+
						"<br/><br/>Peningkatan pertumbuhan ekonomi 2018 tidak terlepas dari dampak positif bauran kebijakan yang ditempuh Bank Indonesia dan Pemerintah dalam merespons ketidakpastian global. Satu sisi, respons kebijakan moneter yang <i>pre-emptive, front loading,</i> dan <i>ahead of the curve</i> untuk menjaga stabilitas perekonomian, khususnya nilai tukar, serta komitmen pemerintah untuk menjaga prospek kesinambungan fiskal, memberikan keyakinan pelaku ekonomi untuk melakukan ekspansi usaha. Sisi lain, arah kebijakan yang akomodatif dari kebijakan fiskal pusat-daerah, termasuk belanja proyek infrastruktur, kebijakan pendalaman pasar keuangan, kebijakan makroprudensial, kebijakan sistem pembayaran, dan kebijakan struktural memberikan stimulus bagi kegiatan ekonomi. Implementasi kebijakan tersebut pada gilirannya mendorong berlanjutnya kegiatan berusaha dan meningkatnya pertumbuhan ekonomi."+
						"<br/><br/>Pertumbuhan ekonomi Indonesia yang meningkat pada 2018 banyak ditopang oleh permintaan domestik. Pertumbuhan konsumsi dan investasi meningkat didukung pendapatan yang membaik, keberlanjutan pembangunan proyek infrastruktur, serta daya beli yang terjaga sejalan dengan tekanan inflasi yang rendah. Beberapa kegiatan lain juga memengaruhi pengeluaran penyelenggaraan pemilihan kepala daerah (Pilkada), kegiatan berskala internasional, seperti di Asian Games dan pertemuan tahunan International Monetary Fund-World Bank (IMF-WB) dan aktivitas persiapan pemilihan umum (Pemilu). Sementara itu, peran ekspor neto menurun dipengaruhi kinerja ekspor yang melambat seiring pertumbuhan ekonomi dunia yang melambat, di tengah impor yang tumbuh tinggi sejalan dengan kenaikan permintaan domestik. "+
						"<br/><br/>Ekspansi perekonomian dari sisi lapangan usaha dipengaruhi oleh sektor sekunder dan sektor tersier. Sejalan dengan konsumsi dan aktivitas impor barang yang tumbuh kuat, kinerja lapangan usaha (LU) perdagangan besar dan eceran tumbuh tinggi. Peningkatan belanja pemerintah termasuk belanja yang terkait anggaran pendidikan mendorong pertumbuhan LU jasa administrasi pemerintahan dan LU jasa pendidikan. Kinerja LU konstruksi juga tumbuh kuat sejalan dengan percepatan penyelesaian pembangunan proyek infrastruktur yang telah memasuki tahap akhir. Sementara itu, kinerja LU industri pengolahan sebagai sektor dengan pangsa terbesar terhadap produk domestik bruto (PDB), tumbuh stabil pada 2018."+
						"<br/><br/>Secara spasial, pertumbuhan ekonomi menguat di hampir seluruh wilayah. Perekonomian Jawa dan Sumatera tumbuh membaik, bahkan Maluku-Papua (Mapua) tumbuh lebih tinggi. Permintaan domestik yang kuat menjadi mesin utama pertumbuhan Jawa dan Sumatera. Pertumbuhan ekonomi Jawa yang kuat juga ditopang oleh membaiknya ekspor seiring dengan meningkatnya kinerja LU industri pengolahan. Perekonomian Mapua yang tumbuh tinggi dipengaruhi peningkatan kinerja ekspor tambang yang signifikan. Berbeda dengan kinerja ekspor di Mapua, perkembangan ekspor tambang di Kalimantan dan Bali-Nusa Tenggara (Bali-Nusra) menurun, sehingga berdampak pada laju pertumbuhan ekonomi yang melambat di kedua wilayah ini. Sementara itu, perlambatan pertumbuhan ekonomi di Sulawesi lebih dipengaruhi oleh melambatnya investasi. "+
						"<br/><br/>Keberlanjutan pemulihan ekonomi berpengaruh positif pada perbaikan kualitas pertumbuhan ekonomi. Berbagai indikator kesejahteraan masyarakat seperti tingkat pengangguran, kemiskinan, dan ketimpangan kembali menurun pada 2018. Perkembangan positif pasar ketenagakerjaan tercermin pada penurunan tingkat pengangguran terbuka (TPT) yang disertai dengan perbaikan tingkat partisipasi angkatan kerja (TPAK). Tingkat kemiskinan pada 2018 melanjutkan tren penurunan dan bahkan berada pada level terendah semenjak krisis ekonomi 1998. Indikator ketimpangan juga menunjukkan penurunan yang dipengaruhi oleh berbagai upaya pemerintah untuk menjaga daya beli dan pengeluaran pada masyarakat kelompok bawah di tengah daya beli dan pengeluaran kelompok 20% teratas yang menurun.",
				"class" : "indent"
			},
			{
				"title": "Bab 3 Neraca Pembayaran Indonesia",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/5_LPI2018_BAB%203.pdf",
				"desc": "Perekonomian global yang kurang kondusif di tengah pertumbuhan ekonomi domestik yang tetap kuat memberikan tantangan bagi pengelolaan neraca pembayaran Indonesia (NPI) 2018. Perekonomian global yang kurang menguntungkan, telah memberikan tekanan pada NPI, baik melalui jalur perdagangan maupun jalur finansial.  Tekanan mengemuka sejak awal tahun dan semakin kuat pada triwulan II dan III 2018. Dalam periode ini, defisit transaksi berjalan melebar didorong pertumbuhan impor yang tinggi akibat permintaan domestik yang kuat serta ekspor yang menurun akibat ekonomi dunia yang juga melambat. Aliran masuk modal asing juga menurun dipicu kenaikan Federal Funds Rate (FFR) dan ketidakpastian pasar keuangan global. Akibatnya, NPI pada tiga triwulan pertama 2018 tercatat defisit (Tabel 3.1). "+
						"<br/><br/>Bauran kebijakan yang tegas dan konsisten ditempuh Bank Indonesia, Pemerintah dan otoritas terkait lainnya, dapat memperkuat kembali kinerja NPI.  Pada triwulan IV 2018, NPI mencatat surplus didorong kenaikan aliran masuk modal asing yang tinggi dan penurunan impor. Aliran masuk modal asing meningkat pada triwulan IV 2018, sehingga dapat menutupi defisit transaksi berjalan yang masih tinggi. Defisit transaksi berjalan yang tinggi pada triwulan IV 2018 banyak dipengaruhi penurunan ekspor akibat pertumbuhan ekonomi dunia dan harga komoditas yang semakin melambat, sedangkan impor pada periode ini telah menurun sebagai dampak positif kebijakan yang ditempuh Bank Indonesia, Pemerintah, dan otoritas terkait. "+
						"<br/><br/>Respons kebijakan yang ditempuh juga dapat mengarahkan ketahanan eksternal tetap kuat. Di tengah tantangan yang mengemuka, perkembangan berbagai indikator ketahanan eksternal tetap baik, meskipun secara keseluruhan tahun 2018, NPI mencatat defisit. Defisit transaksi berjalan pada 2018 berada dalam level yang aman di bawah 3% dari PDB. Posisi cadangan devisa akhir 2018 juga tercatat tetap tinggi sebesar 120,7 miliar dolar AS, cukup untuk membiayai 6,7 bulan impor atau 6,5 bulan impor dan pembayaran utang luar negeri (ULN) pemerintah. Posisi ini juga berada di atas standar kecukupan internasional yakni sekitar 3 bulan impor. Ketahanan eksternal juga turut didukung <i>second line of defense</i> dalam bentuk jaring pengaman keuangan internasional (JPKI) yang memadai. Profil dan struktur ULN tetap aman dan terkendali ditunjang konsistensi kebijakan untuk mengoptimalkan peran ULN dalam mendukung pembiayaan ekonomi dan meminimalkan risiko yang dapat memengaruhi stabilitas perekonomian.",
				"class" : "indent"
			},
			{
				"title": "Bab 4 Inflasi dan Nilai Tukar",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/6_LPI2018_BAB%204.pdf",
				"desc": "Ketidakpastian global yang tinggi dan memberikan tekanan kepada neraca pembayaran Indonesia (NPI) banyak memengaruhi dinamika nilai tukar Rupiah pada 2018. Ketidakpastian tersebut dipicu oleh berlanjutnya kenaikan Federal Funds Rate (FFR) dan ketidakpastian pasar keuangan global. Kondisi ini mengakibatkan aliran masuk modal asing ke negara berkembang berkurang, termasuk Indonesia. Akibatnya, nilai tukar Rupiah mengalami tekanan sampai dengan Oktober 2018, dengan tekanan terbesar terjadi pada Juli 2018. Tekanan depresiasi terhadap Rupiah juga searah dengan pelemahan banyak mata uang negara berkembang lain, sejalan dengan dampak ketidakpastian global yang meningkat tersebut."+
						"<br/><br/>Bank Indonesia menempuh langkah antisipatif untuk menjaga stabilitas perekonomian, khususnya nilai tukar Rupiah. Sebagaimana disampaikan secara lengkap pada Bab 5, kebijakan moneter ditempuh secara <i>pre-emptive, front loading,</i> dan <i>ahead of the curve</i> guna menjaga daya tarik aset pasar keuangan Indonesia dan mengendalikan defisit transaksi berjalan berada pada level yang sehat. Suku bunga kebijakan, Bank Indonesia 7-<i>Day (Reverse) Repo Rate</i> (BI7DRR), naik 175 <i>basis points</i> (bps) sepanjang 2018. Kebijakan nilai tukar juga ditempuh untuk menjaga stabilitas nilai tukar sesuai nilai fundamentalnya, dengan tetap mendorong mekanisme pasar. Kebijakan nilai tukar turut didukung oleh inisiatif pendalaman pasar keuangan termasuk pemberlakuan transaksi <i>domestic non-deliverable forward</i> (DNDF) mulai 1 November 2018, yang secara tidak langsung memengaruhi pergerakan nilai tukar Rupiah menjadi lebih stabil. Kebijakan nilai tukar ditopang pula upaya untuk menjaga kecukupan likuiditas di pasar valas domestik sehingga meminimalkan risiko lanjutan kepada nilai tukar Rupiah. Terakhir, Bank Indonesia terus memperkuat koordinasi dengan Pemerintah dan otoritas terkait dan mendukung serangkaian kebijakan Pemerintah dan Otoritas Jasa Keuangan (OJK) untuk pengendalian defisit transaksi berjalan melalui peningkatan ekspor dan pengendalian impor. "+
						"<br/><br/>Respons kebijakan yang ditempuh dalam perkembangannya mendukung terkendalinya nilai tukar Rupiah pada triwulan IV 2018. Aliran masuk modal asing kembali meningkat pada triwulan IV 2018 sejalan dengan <i>interest rate differential</i> yang tetap menarik dan prospek perekonomian domestik yang stabil. Impor juga mulai melambat sejalan dengan dampak penyesuaian ekonomi terhadap nilai tukar yang bergerak fleksibel. Perkembangan ini pada gilirannya mendorong NPI triwulan IV 2018 mencatat surplus dan akhirnya mendorong Rupiah kembali dalam tren menguat. Secara keseluruhan tahun, Rupiah pada 2018 secara rerata melemah 6,05% (yoy), lebih rendah dibandingkan dengan pelemahan mata uang lain dan diikuti dengan volatilitas yang lebih terkendali."+
						"<br/><br/>Di tengah kondisi meningkatnya tekanan terhadap nilai tukar Rupiah, inflasi 2018 tetap rendah dan terkendali dalam sasaran 3,5&plusmn;1%. Inflasi indeks harga konsumen (IHK) pada akhir 2018 tercatat 3,13% (yoy), sehingga dalam 4 tahun berturut-turut berada dalam kisaran sasaran. Di satu sisi, faktor siklikal seperti harga komoditas pangan global yang menurun dan permintaan yang terkendali memengaruhi tekanan inflasi yang terus menurun (Diagram 4.1). Di sisi lain, perbaikan struktural karakter inflasi Indonesia juga berpengaruh positif, seperti kebijakan moneter yang konsisten, struktur pasar yang semakin kompetitif, serta distribusi dan logistik barang yang lebih lancar. Selain itu, koordinasi dengan Pemerintah Pusat dan Daerah yang semakin erat juga berkontribusi pada perbaikan karakter inflasi tersebut. Perbaikan struktur inflasi pada gilirannya memengaruhi perilaku inflasi seperti ekspektasi yang makin rendah, dampak lanjutan kenaikan inflasi <i>volatile food</i> (VF) dan <i>administered prices</i> (AP) terhadap inflasi yang semakin rendah, serta dampak pelemahan kurs terhadap inflasi yang menurun.",
				"class" : "indent"
			},
			{
				"title": "Bab 5 Kebijakan Moneter",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/7_LPI2018_BAB%205.pdf",
				"desc": "Kebijakan moneter difokuskan untuk menjaga stabilitas perekonomian, khususnya nilai tukar, di tengah kondisi ketidakpastian perekonomian global yang meningkat. Perkembangan sampai triwulan III 2018 menunjukkan kenaikan Federal Funds Rate (FFR) di AS dan ketidakpastian pasar keuangan global telah menurunkan aliran masuk modal asing ke negara berkembang, termasuk Indonesia. Kondisi ini memberikan tantangan bagi kebijakan moneter di negara dengan perekonomian terbuka. Bersamaan dengan defisit transaksi berjalan yang melebar sejalan permintaan domestik yang tetap solid, aliran masuk modal asing yang berkurang pada gilirannya menurunkan kinerja neraca pembayaran Indonesia (NPI) dan meningkatkan tekanan kepada nilai tukar Rupiah. Tantangan ini terutama terlihat pada triwulan II dan III 2018, sehingga perlu direspons dengan segera karena berisiko mengganggu stabilitas perekonomian dan sistem keuangan serta momentum pemulihan ekonomi."+
						"<br/><br/>Berbagai strategi kebijakan moneter dioptimalkan untuk mendukung arah kebijakan tersebut. Strategi ditujukan untuk mempertahankan daya tarik pasar keuangan domestik dan mengendalikan defisit transaksi berjalan dalam batas yang aman. Suku bunga kebijakan, Bank Indonesia 7<i>-Day (Reverse) Repo Rate</i> (BI7DRR), dinaikkan 175 <i>basis points</i> (bps) sebagai langkah <i>pre-emptive, front loading,</i> dan <i>ahead of the curve</i> dari kebijakan moneter untuk menjaga daya tarik pasar keuangan domestik. Langkah terukur ini ditempuh untuk mengendalikan nilai tukar Rupiah, di samping tetap konsisten dengan upaya menjaga inflasi 2018-2019 agar terkendali sesuai sasaran 3,5&plusmn;1%. Kebijakan nilai tukar juga ditempuh untuk menjaga stabilitas nilai tukar sesuai nilai fundamentalnya, dengan tetap mendorong mekanisme pasar.  Bank Indonesia juga memperkuat strategi operasi moneter guna menjaga kecukupan likuiditas pasar uang dan perbankan, yang menurun sejalan dampak aliran masuk modal asing yang berkurang. Upaya memperkuat jaring pengamanan keuangan internasional (JPKI) turut ditempuh guna meningkatkan ketahanan sektor eksternal. Terakhir, koordinasi dengan Pemerintah dan otoritas terkait tetap dipererat guna meningkatkan efektivitas kebijakan moneter dalam menjaga stabilitas perekonomian."+
						"<br/><br/>Respons kebijakan moneter serta bauran kebijakan yang ditempuh Bank Indonesia dan Pemerintah dalam perkembangannya dapat kembali memperkuat ketahanan eksternal, mengendalikan stabilitas perekonomian, dan menjaga momentum pertumbuhan ekonomi. Pada triwulan IV 2018, aliran masuk modal asing kembali meningkat dipengaruhi daya tarik aset keuangan domestik yang tinggi, stabilitas perekonomian yang terjaga, dan prospek perekonomian domestik yang tetap positif. Respons kebijakan juga mulai berdampak pada pengendalian impor, sehingga bersamaan dengan peningkatan aliran masuk modal asing turut mendorong Rupiah dalam tren menguat pada triwulan IV 2018. Sementara itu, inflasi 2018 terkendali sesuai dengan sasaran inflasi 3,5&plusmn;1% dan mendukung pertumbuhan ekonomi tetap kuat. Perkembangan positif tersebut tidak terlepas dari transmisi kebijakan moneter yang berjalan baik dan stabilitas sistem keuangan yang terkendali. ",
				"class" : "indent"
			},
			{
				"title": "Bab 6 Kebijakan Pendalaman Pasar Keuangan",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/8_LPI2018_BAB%206.pdf",
				"desc": "Kebijakan pendalaman pasar keuangan diarahkan pada upaya peningkatan peran pasar keuangan dalam mendukung kesinambungan pertumbuhan ekonomi. Hal ini ditempuh karena pasar keuangan yang dalam, likuid, efisien, inklusif, dan aman, akan dapat mendorong pasar keuangan berperan maksimal  dalam mendukung pembiayaan ekonomi. Dengan karakteristik pasar keuangan yang dalam dan likuid, maka alokasi modal akan lebih efisien sehingga dapat menjadi basis bagi pertambahan sumber pembiayaan ekonomi yang baru. Karakteristik pasar keuangan tersebut yang ditambah dengan inklusif dan aman, juga dapat meredam tekanan (<i>shocks</i>) bila terjadi gejolak di pasar keuangan. Secara keseluruhan, variasi instrumen pasar baik untuk pembiayaan maupun pengelolaan risiko dalam pembiayaan jangka panjang, serta investor yang beragam akan berkontribusi positif dalam memberikan alternatif sumber pembiayaan ekonomi. "+
						"<br/><br/>Bank Indonesia bersama Otoritas Jasa Keuangan (OJK) dan Kementerian Keuangan melalui Forum Koordinasi Pembiayaan Pembangunan melalui Pasar Keuangan (FK-PPPK) telah menyusun Strategi Nasional Pengembangan dan Pendalaman Pasar Keuangan (SN-PPPK) guna mempercepat pendalaman pasar keuangan.  Strategi nasional menjadi komitmen bersama ketiga otoritas untuk mengoptimalkan peran pasar keuangan sebagai sumber pembiayaan pembangunan. Selaras dengan SN-PPPK, kebijakan pendalaman pasar keuangan Bank Indonesia pada 2018 difokuskan pada upaya peningkatan efisiensi pasar uang dan pasar valas guna turut mendorong pembiayaan jangka panjang sebagai sumber pembiayaan ekonomi.  Beberapa strategi yang ditempuh ialah pengembangan instrumen untuk penguatan aktivitas penggunaan lindung nilai, pengelolaan likuiditas/sumber pendanaan jangka pendek, serta penguatan kredibilitas pasar. Kebijakan juga ditempuh untuk mendukung pengembangan investasi jangka panjang di pasar modal. Selain itu, penguatan peran pasar keuangan turut ditempuh melalui perluasan inovasi instrumen untuk pembiayaan proyek infrastruktur. Strategi kebijakan Bank Indonesia tersebut senantiasa dikoordinasikan dengan OJK dan Kementerian Keuangan dalam FK-PPPK. "+
						"<br/><br/>Kebijakan pendalaman pasar keuangan yang ditempuh berdampak positif pada perkembangan pasar keuangan di 2018. Di pasar valas, berbagai upaya sosialisasi telah berkontribusi pada peningkatan volume transaksi derivatif di pasar valas dalam rangka lindung nilai terhadap risiko nilai tukar. Kinerja positif pasar valas juga disertai dengan efisiensi pasar valas yang tetap terjaga, sebagaimana tercermin dari <i>bid-ask spread</i> transaksi <i>spot</i> dolar Amerika Serikat (AS) terhadap Rupiah yang  berada dalam level rendah dan volume transaksi yang cukup tinggi.  Sementara di pasar uang, perkembangan pasar repo dapat mendukung pengelolaan likuiditas Rupiah di jangka waktu yang lebih panjang. Terkait dukungan terhadap pembiayaan infrastruktur, koordinasi Bank Indonesia melalui FK-PPPK bekerja sama dengan Kementerian Badan Usaha Milik Negara (BUMN) berhasil mendorong tercapainya kesepakatan pembiayaan proyek infrastruktur strategis. Kesepakatan pembiayaan proyek infrastruktur strategis senilai 13,6 miliar dolar AS ditandatangani pada Oktober 2018.",
				"class" : "indent"
			},
			{
				"title": "Bab 7 Kebijakan Makroprudensial",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/9_LPI2018_BAB%207.pdf",
				"desc": "Bank Indonesia menempuh kebijakan makroprudensial yang akomodatif dengan didukung akses likuiditas yang lebih luas dan permodalan yang memadai. Kebijakan makroprudensial akomodatif ditempuh dengan mempertimbangkan siklus finansial yang berada di bawah pola jangka panjang. Kebijakan ini pada gilirannya ditujukan untuk mendorong fungsi intermediasi perbankan dan menopang momentum pemulihan ekonomi. Arah kebijakan makroprudensial ditempuh dengan tetap mempertimbangkan stabilitas sistem keuangan, termasuk dengan terus mencermati berbagai risiko ketidakpastian global yang meningkat."+
						"<br/><br/>Arah kebijakan makroprudensial ditempuh melalui berbagai piranti. Rasio <i>Loan to Value</i> atau <i>Financing to Value </i>(LTV/FTV) untuk Kredit Pemilikan Rumah (KPR) dilonggarkan guna mendorong pertumbuhan melalui sektor properti yang mempunyai dampak pengganda besar bagi perekonomian. Peran usaha mikro kecil dan menengah (UMKM) dalam menggerakkan perekonomian juga makin didorong melalui peningkatan target rasio kredit UMKM dari 15% menjadi 20% pada 2018. Pelonggaran juga dilakukan dengan mengimplementasikan ketentuan Rasio Intermediasi Makroprudensial (RIM), yang memperluas cakupan intermediasi dengan memasukkan pembelian surat-surat berharga, sehingga bank lebih leluasa dalam menyalurkan pembiayaan di luar pembiayaan konvensional dalam bentuk kredit. Bank Indonesia juga melakukan pelonggaran kebijakan Penyangga Likuiditas Makroprudensial (PLM) dengan memberikan fleksibilitas pengelolaan likuiditas yang lebih tinggi bagi bank untuk me-repo-kan surat-surat berharga (SSB) yang dimiliki kepada Bank Indonesia, dari 2% menjadi 4% dari DPK Rupiah. Sementara itu, untuk menyeimbangkan antara upaya mendorong intermediasi dan upaya memitigasi risiko, besaran <i>countercyclical capital buffer</i> (CCB) ditetapkan tidak berubah sebesar 0%."+
						"<br/><br/>Bank Indonesia melengkapi arah kebijakan makroprudensial tersebut dengan senantiasa memperkuat pengawasan makroprudensial, serta mempererat koordinasi dengan Pemerintah dan otoritas keuangan dalam rangka menjaga stabilitas sistem keuangan. Penguatan pengawasan difokuskan pada bank dan korporasi yang signifikan memengaruhi sistem keuangan. Sementara itu, penguatan koordinasi difokuskan pada sinergi kebijakan makroprudensial dan mikroprudensial, serta untuk pencegahan dan penanganan krisis. Di samping itu, Bank Indonesia juga berpartisipasi aktif dalam reformasi sektor keuangan global melalui keanggotaan dalam <i>Financial Stability Board</i> (FSB). "+
						"<br/><br/>Arah kebijakan makroprudensial yang ditempuh berdampak positif bagi meningkatnya intermediasi perbankan dan terjaganya stabilitas sistem keuangan. Kebijakan makroprudensial yang akomodatif berkontribusi pada peningkatan kredit perbankan yang tumbuh 11,8%, atau tertinggi dalam 4 tahun terakhir. Peningkatan kredit terutama disumbang oleh kredit yang mendukung proses produksi berupa kredit modal kerja dan dan kredit investasi yang meningkat 12,3%. Pencapaian tersebut menopang pembiayaan domestik untuk kegiatan ekonomi, di tengah penurunan pembiayaan nonbank dan pasar keuangan. Sementara itu, stabilitas sistem keuangan tetap terjaga dengan ketahanan perbankan yang tetap kuat, seperti rasio kecukupan modal atau <i>capital adequacy ratio</i> (CAR) yang tinggi dan <i>non performing loan</i> (NPL) yang rendah.",
				"class" : "indent"
			},
			{
				"title": "Bab 8 Kebijakan Sistem Pembayaran",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/10_LPI2018_BAB%208.pdf",
				"desc": "Kebijakan sistem pembayaran Bank Indonesia pada 2018 diarahkan untuk mendukung momentum pertumbuhan ekonomi dengan meningkatkan kelancaran, keamanan, dan efisiensi transaksi pembayaran. Dalam kaitan ini, kebijakan pada 2018 ditujukan untuk mendukung efisiensi dan efektivitas berbagai program pemerintah, termasuk program penyaluran program bantuan sosial. Selain itu, kebijakan 2018 juga diarahkan untuk mengantisipasi berbagai tantangan, sehingga sistem pembayaran dapat terus menopang kesinambungan pertumbuhan ekonomi. Tantangan pertama bersumber dari arus digitalisasi dan perkembangan teknologi yang pesat dan cepat, yang berpotensi mengubah lanskap sistem pembayaran nasional. Tantangan kedua berkaitan dengan pentingnya memperkuat ekosistem pembayaran nontunai di dalam negeri sehingga semakin efisien. Terakhir, menjaga ketersediaan uang layak edar di seluruh wilayah Indonesia secara merata, di tengah kondisi geografis Indonesia yang luas."+
						"<br/><br/>Sejalan dengan arah kebijakan, Bank Indonesia memperkuat strategi kebijakan sistem pembayaran baik sisi nontunai maupun sisi tunai. Di sisi nontunai, Bank Indonesia mendorong percepatan dan perluasan elektronifikasi pembayaran nontunai di berbagai area, seperti penyaluran program sosial pemerintah, pembayaran di sektor transportasi, dan pengelolaan transaksi keuangan Pemerintah Daerah. Bank Indonesia juga terus memperkuat ekosistem pembayaran dan keuangan digital melalui implementasi gerbang pembayaran nasional (GPN) dan pengembangan ekosistem teknologi finansial (tekfin), terutama di bidang sistem pembayaran. Di sisi tunai, Bank Indonesia terus berupaya untuk memperluas jangkauan layanan penyediaan uang layak edar ke seluruh wilayah Indonesia. Di tengah upaya mendukung kegiatan ekonomi tersebut, Bank Indonesia juga tetap memastikan aspek kehati-hatian dalam penyelenggaraan layanan sistem pembayaran. Kebijakan terakhir ini diwujudkan dengan memperkuat pengendalian risiko dan perlindungan terus konsumen."+
						"<br/><br/>Bank Indonesia terus memperkuat kerjasama dan koordinasi kelembagaan dalam rangka menjaga kelancaran dan keamanan sistem pembayaran nasional. Secara konsisten, Bank Indonesia memperkuat koordinasi dan perannya melalui berbagai fora di tingkat nasional dan internasional. Di tingkat nasional, koordinasi dilakukan dengan melibatkan pelaku industri dan otoritas terkait lainnya, termasuk dengan Pemerintah melalui kementerian/lembaga terkait. Sinergi dengan Pemerintah juga diperkuat dalam rangka memperluas akses masyarakat terhadap layanan keuangan (keuangan inklusif). Di tingkat internasional, Bank Indonesia terus berupaya memperkuat perannya di forum internasional, antara lain sebagai anggota Committee on Payments and Market Infrastructure (CPMI) dan observer di Financial Action Task Force (FATF). Hal tersebut penting untuk memastikan sistem pembayaran Indonesia yang berdasarkan standar internasional, sekaligus menopang kredibilitas.",
				"class" : "indent"
			},
			{
				"title": "Bab 9 Kebijakan Fiskal dan Reformasi Struktural",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/11_LPI2018_BAB%209.pdf",
				"desc": "Kebijakan fiskal 2018 difokuskan pada upaya memperkuat prospek kesinambungan fiskal, dengan tetap mengoptimalkan ruang untuk mendorong pertumbuhan ekonomi. Kebijakan ditempuh mempertimbangkan pentingnya ketahanan fiskal dalam menopang stabilitas perekonomian di tengah kondisi ketidakpastian global yang meningkat. Namun, Pemerintah tetap menjadikan anggaran pendapatan belanja negara/daerah (APBN/APBD) sebagai piranti kontrasiklikal kebijakan makroekonomi untuk menjaga momentum pemulihan ekonomi. Bersamaan dengan arah kebijakan ini, penguatan kebijakan struktural terus ditempuh guna meningkatkan kapasitas perekonomian, yang pada akhirnya bertujuan menopang stabilitas dan pertumbuhan ekonomi dalam jangka menengah."+
						"<br/><br/>Arah kebijakan ditempuh melalui strategi di tiap komponen APBN 2018. Dari sisi pendapatan negara, strategi difokuskan untuk meningkatkan penerimaan negara dari pajak dengan memanfaatkan basis data dan kepatuhan pajak yang makin meningkat. Dari sisi belanja negara, strategi diarahkan pada penajaman kualitas belanja dalam mendukung pertumbuhan ekonomi melalui program perlindungan sosial, subsidi yang tepat sasaran, dan penguatan desentralisasi fiskal untuk mengakselerasi pengurangan kemiskinan dan kesenjangan sosial. Sementara dari sisi pembiayaan, strategi pembiayaan ditempuh berhati-hati, efisien, seimbang dan produktif sehingga turut mendukung kesinambungan fiskal. Strategi kebijakan didukung oleh stimulus dari kebijakan fiskal daerah dan pembangunan proyek infrastruktur melalui berbagai skim pembiayaan. Reformasi struktural juga terus dilanjutkan melalui berbagai kebijakan struktural untuk memperkuat iklim usaha. "+
						"<br/><br/>Strategi yang ditempuh dapat memperkuat prospek kesinambungan fiskal, dengan tetap mendukung pertumbuhan ekonomi. Prospek kesinambungan fiskal membaik tergambar pada defisit keseimbangan primer 2018 yang menurun mencapai 1,86 miliar Rupiah atau 0,01% dari produk domestik bruto (PDB). Sejalan dengan itu, realisasi defisit APBN 2018 juga menurun menjadi 1,76% dari PDB. Rasio utang pemerintah terhadap PDB tetap pada level sehat di kisaran 30% pada 2018. Sementara itu, belanja untuk program perlindungan sosial dan stimulus fiskal daerah yang meningkat, serta pengeluaran untuk infrastruktur turut berkontribusi mendorong pertumbuhan ekonomi 2018.",
				"class" : "indent"
			},
			{
				"title": "Bab 10 Prospek dan Arah Kebijakan",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/12_LPI2018_BAB%2010.pdf",
				"desc": "Prospek perekonomian Indonesia 2019 akan lebih baik, meskipun perekonomian global yang belum kondusif perlu terus mendapat perhatian. Momentum pertumbuhan ekonomi Indonesia berlanjut dalam kisaran 5,0%-5,4%, ditopang permintaan domestik yang kuat. Ketahanan eksternal juga makin kuat didukung defisit transaksi berjalan (TB) yang turun menjadi sekitar 2,5% dari produk domestik bruto (PDB), serta aliran masuk modal asing yang kembali meningkat. Stabilitas harga juga terkendali dimana inflasi diprakirakan dalam kisaran sasaran 3,5&plusmn;1%. Stabilitas sistem keuangan juga terjaga dan ditopang intermediasi yang membaik dengan kredit pada 2019 diprakirakan tumbuh sebesar 10%-12%."+
						"<br/><br/>Perekonomian domestik dalam jangka menengah diprakirakan berada dalam lintasan yang meningkat. Prospek ini sejalan dengan dampak positif berbagai reformasi struktural yang ditempuh yang diprakirakan dapat meningkatkan efisiensi perekonomian dan mendorong kenaikan kapasitas perekonomian. Struktur perekonomian juga lebih berdaya tahan serta ditopang sumber pembiayaan yang lebih permanen dan sehat. Prospek perbaikan struktur ini pada gilirannya dapat mendorong pertumbuhan ekonomi meningkat dalam kisaran 5,5%-6,1% pada 2024. Sejalan dengan kondisi tersebut, ketahanan eksternal makin baik tergambar pada defisit TB yang terus menurun dan inflasi yang makin rendah. "+
						"<br/><br/>Sinergi kebijakan antara Bank Indonesia, Pemerintah, Otoritas Jasa Keuangan (OJK), serta otoritas lain makin solid guna memperkuat prospek perekonomian Indonesia. Dalam kaitan ini, kebijakan moneter, kebijakan sektor keuangan, dan fiskal tetap diarahkan pada upaya menjaga stabilitas makroekonomi dan sektor keuangan, dengan tetap manfaatkan ruang yang tersedia untuk stimulus pertumbuhan ekonomi. Stimulus perekonomian tersebut termasuk mengoptimalkan peran kebijakan pendalaman pasar keuangan, kebijakan makroprudensial, kebijakan sistem pembayaran, serta ekonomi dan keuangan syariah. Stabilitas sistem keuangan juga diperkuat melalui koordinasi dan pengawasan yang erat antara Kementerian Keuangan, Bank Indonesia, OJK, dan Lembaga Penjamin Simpanan (LPS) dalam Komite Stabilitas Sistem Keuangan (KSSK), termasuk dalam pencegahan dan penanganan krisis keuangan."+
						"<br/><br/>Sinergi kebijakan juga ditempuh untuk konsisten melanjutkan reformasi struktural melalui empat strategi utama. Pertama, strategi meningkatkan daya saing perekonomian nasional. Upaya ini dilakukan melalui penguatan empat elemen dasar yakni ketersediaan infrastruktur, kualitas modal manusia (<i>human capital</i>), adopsi teknologi, dan dukungan kelembagaan. Kedua, strategi untuk mengembangkan kapasitas dan kapabilitas sektor industri. Ketiga, strategi mengoptimalkan pemanfaatan ekonomi digital. Terakhir, strategi untuk memperluas sumber pembiayaan ekonomi.",
				"class" : "indent"
			},
			{
				"title": "Lampiran",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/13_LAMPIRAN.pdf",
				"desc": "<table id='lampiranTable' border='0'>"+
						"	<tr><th colspan='4' style='padding:0px 15px 0px 0px;'>Nomor</th><th colspan='8'>Judul</th></tr>"+
						"	<tr><td colspan='4'></td><td colspan='8'>Peraturan Bank Indonesia Tahun 2018</td></tr>"+
						"	<tr><td colspan='4'>Tabel 1</td><td colspan='8'>Produk Domestik Bruto Menurut Jenis Pengeluaran</td></tr>"+
						"	<tr><td colspan='4'>Tabel 2</td><td colspan='8'>Produk Domestik Bruto Menurut Lapangan Usaha (Harga Konstan)</td></tr>"+
						"	<tr><td colspan='4'>Tabel 3</td><td colspan='8'>Produk Domestik Bruto menurut Lapangan Usaha (Harga Berlaku)</td></tr>"+
						"	<tr><td colspan='4'>Tabel 4</td><td colspan='8'>Indeks Harga Konsumen Indonesia</td></tr>"+
						"	<tr><td colspan='4'>Tabel 5</td><td colspan='8'>Inflasi</td></tr>"+
						"	<tr><td colspan='4'>Tabel 6</td><td colspan='8'>Indeks Harga Perdagangan Besar Indonesia</td></tr>"+
						"	<tr><td colspan='4'>Tabel 7</td><td colspan='8'>Neraca Pembayaran Indonesia</td></tr>"+
						"	<tr><td colspan='4'>Tabel 8</td><td colspan='8'>Suku Bunga Deposito dalam Rupiah dan Valuta Asing menurut Kelompok Bank</td></tr>"+
						"	<tr><td colspan='4'>Tabel 9</td><td colspan='8'>Suku Bunga Kredit Rupiah Menurut Kelompok Bank</td></tr>"+
						"	<tr><td colspan='4'>Tabel 10</td><td colspan='8'>Perkembangan Jumlah Aliran Uang Kertas Melalui Kantor Pusat Bank Indonesia dan Kantor Perwakilan Dalam Negeri Bank Indonesia</td></tr>"+
						"	<tr><td colspan='4'></td><td colspan='8'>Daftar istilah</td></tr>"+
						"	<tr><td colspan='4'></td><td colspan='8'>Daftar Singkatan</td></tr>"+
						"</table>",
				"class" : ""
			},
			{
				"title": "Laporan Perekonomian Indonesia 2018",
				"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/14_LPI2018.pdf",
				"desc": "",
				"class" : "indent"
			}
			
		]
	}
}

var listLPI = ["2018","2017","2016","2015"];


// var pdfLink = {
// 	"2016": {
//         "cover" : "cover2016.png",
//         "title": "Bersinergi Memperkuat Resiliensi, Mendorong Momentum Pemulihan Ekonomi",
//         "prakata" : "Tahun 2016 yang pada awalnya diharapkan menjadi tahun percepatan pemulihan ekonomi "+
//                     "domestik kembali menjadi tahun yang penuh tantangan seiring dengan perkembangan global yang masih "+
//                     "belum menggembirakan. Ekonomi global masih belum pulih seperti yang diharapkan dan tetap diwarnai "+
//                     "ketidakpastian. Dinamika ekonomi global pada 2016 berkisar pada tiga permasalahan utama yang "+
//                     "terjadi sejak 2015, yaitu pertumbuhan ekonomi dunia yang belum kuat, harga komoditas yang masih "+
//                     "rendah, dan ketidakpastian pasar keuangan yang tetap tinggi.",
// 		"content": [{
// 				"title": "Cover, Daftar isi dan Prakata",
// 				"link": "1_LPI2016-Cover-Daftar-Isi-Prakata.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Tinjauan Umum",
// 				"link": "2_LPI2016-Tinjauan-Umum.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bagian I",
// 				"link": "3_LPI2016-Bagian-I.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bagian II",
// 				"link": "4_LPI2016-Bagian-II.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bagian III",
// 				"link": "5_LPI2016-Bagian-III.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bagian IV",
// 				"link": "6_LPI2016-Bagian-IV.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Lampiran",
// 				"link": "7_LPI2016-Lampiran.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Versi Lengkap",
// 				"link": "LPI2016-web.pdf",
// 				"desc": ""
// 			}
// 		]
// 	},
// 	"2017": {
//         "cover" : "cover2017.png",
//         "title": "Mengoptimalkan Momentum, Memperkuat Struktur",
//         "prakata" : "Ketika saya mulai memimpin Bank Indonesia pada 2013, perekonomian sedang menghadapi "+
//                     "meningkatnya ketidakpastian pasar keuangan global terkait perubahan arah kebijakan "+
//                     "moneter AS atau yang dikenal sebagai taper tantrum. Kondisi tersebut diperberat oleh "+
//                     "perekonomian domestik yang sedang mengalami ketidakseimbangan baik internal maupun eksternal. "+
//                     "Hal tersebut antara lain tercermin pada tekanan inflasi yang meningkat, pertumbuhan ekonomi "+
//                     "yang melambat, defisit transaksi berjalan yang melebar, serta nilai tukar yang melemah cukup tajam."+
//                     "Pada tahun-tahun berikutnya, perubahan arah kebijakan moneter AS terus berlanjut dengan kenaikan "+
//                     "Fed Funds Rate dan pengurangan neraca bank sentral. Perkembangan tersebut belum ada presedennya "+
//                     "yang dapat menjadi kompas dalam menentukan respons kebijakan yang mampu memitigasi rambatan "+
//                     "risiko dan sekaligus mendorong perbaikan ekonomi domestik. Melihat kembali pada tahun-tahun itu, "+
//                     "kita patut bersyukur bahwa pilihan fokus kebijakan untuk stabilisasi perekonomian yang ditempuh "+
//                     "secara konsisten mampu membawa perekonomian Indonesia secara berangsur terus membaik. ",
// 		"content": [{
// 				"title": "Cover",
// 				"link": "1_LPI2017_COVER.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Tinjauan Umum",
// 				"link": "2_LPI2017_TINJAUAN-UMUM.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 1",
// 				"link": "3_LPI2017_BAB1.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 2",
// 				"link": "4_LPI2017_BAB2.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 3",
// 				"link": "5_LPI2017_BAB3.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 4",
// 				"link": "6_LPI2017_BAB4.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 5",
// 				"link": "7_LPI2017_BAB5.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 6",
// 				"link": "8_LPI2017_BAB6.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 7",
// 				"link": "9_LPI2017_BAB7.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 8",
// 				"link": "10_LPI2017_BAB8.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 9",
// 				"link": "11_LPI2017_BAB9.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 10",
// 				"link": "12_LPI2017_BAB10.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Lampiran",
// 				"link": "13_LPI2017_LAMPIRAN.pdf",
// 				"desc": ""
// 			}
// 		]
// 	},
// 	"2018": {
//         "cover" : "cover2018.jpg",
//         "title": "Sinergi untuk ketahanan dan pertumbuhan",
//         "prakata" : "Ketika saya mulai memimpin Bank Indonesia pada 2013, perekonomian sedang menghadapi "+
//                     "meningkatnya ketidakpastian pasar keuangan global terkait perubahan arah kebijakan "+
//                     "moneter AS atau yang dikenal sebagai taper tantrum. Kondisi tersebut diperberat oleh "+
//                     "perekonomian domestik yang sedang mengalami ketidakseimbangan baik internal maupun eksternal. "+
//                     "Hal tersebut antara lain tercermin pada tekanan inflasi yang meningkat, pertumbuhan ekonomi "+
//                     "yang melambat, defisit transaksi berjalan yang melebar, serta nilai tukar yang melemah cukup tajam."+
//                     "Pada tahun-tahun berikutnya, perubahan arah kebijakan moneter AS terus berlanjut dengan kenaikan "+
//                     "Fed Funds Rate dan pengurangan neraca bank sentral. Perkembangan tersebut belum ada presedennya "+
//                     "yang dapat menjadi kompas dalam menentukan respons kebijakan yang mampu memitigasi rambatan "+
//                     "risiko dan sekaligus mendorong perbaikan ekonomi domestik. Melihat kembali pada tahun-tahun itu, "+
//                     "kita patut bersyukur bahwa pilihan fokus kebijakan untuk stabilisasi perekonomian yang ditempuh "+
//                     "secara konsisten mampu membawa perekonomian Indonesia secara berangsur terus membaik. ",
// 		"content": [{
// 				"title": "Cover",
// 				"link": "1_LPI2018_COVER-DAFTARISI-PRAKATA.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Tinjauan Umum",
// 				"link": "2_LPI2018_TINJAUAN-UMUM.pdf",
// 				"desc": ""
// 			},
// 			{
// 				"title": "Bab 1",
// 				"link": "3_LPI2018_BAB1.pdf",
// 				"desc": ""
// 			}
// 		]
// 	}
// }

// var listLPI = ["2018","2017","2016"];
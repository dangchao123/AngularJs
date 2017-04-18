// Ìí¼Ó¿ØÖÆÆ÷
app.controller("contentctrl",function($scope){
	$scope.people1=[
		{"name":"小鱼儿","picURL":"images/a9.jpg","content":"不哭不闹不炫耀，安安分分一起老。不骂不吵不张扬，安安分分一起过。就算逃到天涯海角，也决不回头。就算哭到世界灭亡，也决不后悔。我想依靠你 永远在我旁边带路。我想牵着你 永远只会为你带路。偶尔有点小任性，为了等待你安抚。偶尔有点小情绪，为了引起你注意。所有的一切、都不是什么誓言。所谓的一切、到头来都是欺骗。蓦然、心锁的钥匙新了不实用了。蓦然、心锁的钥匙旧了可以换了。","imgURL":"","nodeid":1,"parentnodeid":0},
		{"name":"大张李","picURL":"images/a5.jpg","content":"希望你能每天都快乐","imgURL":"","nodeid":4,"parentnodeid":1,"nodeindex":1},
		{"name":"我是黄小明","picURL":"images/a3.jpg","content":"我只是从这里路过......","imgURL":"","nodeid":5,"parentnodeid":1,"nodeindex":2},
		{"name":"帕金森","picURL":"images/a6.jpg","content":"日动影移，日穿帘隙，时间悄无声息地离去。不知不觉，那么多渐行渐远的岁月，如今只剩下依稀的背影，翻过岁月的篱墙，面对那些悄然散场的旧时光，莞尔一笑，只言感恩岁月，不诉岁月离殇。","imgURL":"images/c5.jpg","nodeid":2,"parentnodeid":0},
		{"name":"请叫我大帅柯","picURL":"images/a4.jpg","content":"这世界上的很多事，有时候和我们眼睛看到的不一样。很多时候要我们慢慢地体会才会知道。我们不能急着看结果，就像种下一棵小花，你要耐心地等它破土发芽，慢慢长大，才能看到它开出美丽的花。尘世间的事也一样，要在时间里发酵，岁月里沉香，人生那些百思不得其解的事情，到后来时间会一一给你答案。岁月有时候特别用心良苦，它时常会给你很多磨难，其实它是想让你变得更好。","imgURL":"","nodeid":3,"parentnodeid":0},
		{"name":"月亮的影子","picURL":"images/a2.jpg","content":"孩子的时候，我们简单地把人划分为好人或坏人。只是后来长大了，知道了，好人没有你想象的那么好，坏人也没有你想象的那么坏。正如，外表坚强的人，也许内心很脆弱，而外表柔弱的人，却有着一颗强韧的心。","nodeid":6,"parentnodeid":3,"nodeindex":1}
	];
})

app.controller("fansctrl",function($scope){
	$scope.people2=[
		{"num":1,"name":"小王","picURL":"images/a1.jpg","job":"设计师，博客"},
		{"num":2,"name":"张琳","picURL":"images/a2.jpg","job":"作家，杂志编辑"},
		{"num":3,"name":"李小明","picURL":"images/a3.jpg","job":"艺术总监，电影剪辑"},
		{"num":4,"name":"赵大诚","picURL":"images/a4.jpg","job":"音乐家，运动员 "}
	];

})
app.controller("navctrl",function($scope){
	$scope.list=[
        {"name":"首页","parentid":0,"id":1},
        {"name":"简介","parentid":0,"id":2},
        {"name":"信息","parentid":0,"id":3},
        {"name":"操作","parentid":0,"id":4},
        {"name":"设置栏目","parentid":4,"id":5},
        {"name":"更多设置","parentid":4,"id":6},
        {"name":"分割线","parentid":4,"id":7}
	]
})
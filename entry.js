function Entry () {
    this.title = "";
    this.author = "";
    this.body = "";
}

entry_array = new Array();
for (i = 0; i < 2; i++) {
    entry_array[i] = new Entry();
}

entry_array[0].title = "テストだよ";
entry_array[0].author = "gion_U";
entry_array[0].body = "これはテストではありません";

entry_array[1].title = "あいうえお";
entry_array[1].author = "わたし";
entry_array[1].body = "内容";

function put_entry (ary) {
//    for (i = 0; entry_dom_obj[i] != undefined; i++)
//	$("body").append(entry_dom_obj[i]);
//    jQuery.each(ary, $("body").append);
    for (i = 0; ary[i] != undefined ; i++) {
	entry = $(
	    '<div>'
		+ '<p class="title">' + entry_array[i].title + '</p>'
		+ '<p class="author">' + entry_array[i].author + '</p>'
		+ '<p class="body">' + entry_array[i].body + '</p>'
		+ '</div>'
	);
	$('body').append(entry);
    }
}

put_entry(entry_array);
put_entry(entry_array);

//$("body")

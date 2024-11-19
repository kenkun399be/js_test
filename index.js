var name = localStorage.getItem("name")
if (name) {
		var name = prompt(`aaa`);
    localStorage.setItem(`name` , name);
}

alert( `${name}さんこんにちは！` );

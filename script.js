tailwind.config = {
    theme: {
        extend: {
            colors: {
                black: "#212629",
                dark: "#000000",
                offWhite: "#F7FCFF",
                offWhite2: "#E5EFF7",
                offGray: "#8F8F8F",
                offGray2: "#f7f7f7",
                brightBlue: "#3392E9",
                greyTone1: "#737D84",
                greyTone2: "#909BA3",
            },
        },
    },
};
function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
var nameProperty = document.getElementById("name-of-property");
const wordCount = () => {
    // console.log(c.value)
    console.log(nameProperty.value.length);
}
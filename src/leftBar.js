export default function loadLeftBar() {

    //Left Menu Bar Container
    const leftBar = document.createElement("div");
    leftBar.classList.add("leftBar");

    const leftBarTop = document.createElement("div");
    leftBarTop.classList.add("leftBarTop");

    const leftBarHeader = document.createElement("div");
    leftBarHeader.classList.add("leftBarHeader");
    leftBarHeader.textContent = "To Do"

    const leftBarCategories = document.createElement("div");
    leftBarCategories.classList.add("leftBarCategories");

    const leftBarCategory1 = document.createElement("div");
    leftBarCategory1.classList.add("leftBarCategory1");

    const leftBarCategory1Img = document.createElement("div");
    leftBarCategory1Img.classList.add("leftBarCategory1Img");

    const leftBarCategory1Title = document.createElement("div");
    leftBarCategory1Title.classList.add("leftBarCategory1Title");
    leftBarCategory1Title.textContent = "All Tasks"

    leftBarCategory1.append(leftBarCategory1Img,leftBarCategory1Title);

    leftBarCategories.append(leftBarCategory1);

    leftBarTop.append(leftBarHeader,leftBarCategories);


    const leftBarButton = document.createElement("button");
    leftBarButton.classList.add("leftBarButton");
    leftBarButton.textContent = "+ New Category"


    leftBar.append(leftBarTop,leftBarButton)

    return {leftBar};

}
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewCount;
    if (views >= 1000000) {
        viewCount = (views / 1000000).toFixed(1) + "M";
    }else if (views >= 1000) {
        viewCount = (views / 1000).toFixed(0) + "K";
    }else {
        viewCount = views;
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} . ${viewCount} views. ${monthsOld} months old</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Introduction to Backend | Sigma Web Dev video #3", "CodeWithHarry", 1200000, 7, "25:09", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Demo Video", "Demo Channel", 3240000, 4, "1:04:57", "https://imgs.search.brave.com/1NJbfDYhNd3ee8F2Sjk3I7BTvUpguOHgBSWgJiON92U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1m/aWdtYS1odWJmaWxl/LWltYWdlcy1wcm9k/dWN0aW9uLmZpZ21h/LmNvbS9odWIvZmls/ZS9jYXJvdXNlbC9p/bWcvOTFkZWY2YTRi/YTlmODU0NGQ4ODBj/ZDMyMDBhOWFhNGU0/OTdkNjYyMS9hMTQz/YzRjOTdiYzU4MTBh/M2NjMmQ3NDllNTVm/OTk1ZjdlMGUxZDk2")

createCard("Demo Video", "Demo Channel", 909, 4, "1:04:57", "https://imgs.search.brave.com/1NJbfDYhNd3ee8F2Sjk3I7BTvUpguOHgBSWgJiON92U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1m/aWdtYS1odWJmaWxl/LWltYWdlcy1wcm9k/dWN0aW9uLmZpZ21h/LmNvbS9odWIvZmls/ZS9jYXJvdXNlbC9p/bWcvOTFkZWY2YTRi/YTlmODU0NGQ4ODBj/ZDMyMDBhOWFhNGU0/OTdkNjYyMS9hMTQz/YzRjOTdiYzU4MTBh/M2NjMmQ3NDllNTVm/OTk1ZjdlMGUxZDk2")
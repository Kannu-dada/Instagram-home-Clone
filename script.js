let usersArray = [
    { 
        username: 'user1',
        imageSrc: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
        story:'https://images.unsplash.com/photo-1720264715417-eee343d0d756?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
        username: 'user2',
        imageSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
        story:'https://images.unsplash.com/photo-1718809070481-a16828fbb61d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
        username: 'user3',
        imageSrc: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww',
        story:'https://images.unsplash.com/photo-1720247521711-46ff4ff80894?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
        username: 'user4',
        imageSrc: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0fGVufDB8fDB8fHww',
        story:'https://images.unsplash.com/photo-1719437492355-9686ac0bb4d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
        username: 'user5',
        imageSrc: 'https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww',
        story:'https://images.unsplash.com/photo-1719843076878-437479063d53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
        username: 'user6',
        imageSrc: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1720170717116-3b3180ed20c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
        username: 'user7',
        imageSrc: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHBvcnRyYWl0fGVufDB8fDB8fHww',
        story:'https://images.unsplash.com/photo-1720165785968-7c0ca6ff2e06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
        username: 'user8',
        imageSrc: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBvcnRyYWl0fGVufDB8fDB8fHww',
        story:'https://images.unsplash.com/photo-1720286790380-f773528fda9a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
        username: 'user9',
        imageSrc: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww',
        story:'https://images.unsplash.com/photo-1720247524001-46a6ec33c60b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
        username: 'user10',
        imageSrc: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvcnRyYWl0fGVufDB8fDB8fHww',
        story:'https://plus.unsplash.com/premium_photo-1671512497536-e20cc1084ea7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

var container =document.querySelector("#container")
var empty =""
usersArray.forEach(function(val,idx) {
    empty+=`<div class="story_container" >
          <div class="image">
            <img id="${idx}" src="${val.imageSrc}" alt="">
          </div>
          <h4>${val.username}</h4>
        </div>`
});

container.innerHTML=empty;

var posts=document.querySelector(".posts")
var emtposts= ""
usersArray.forEach(function(val) {
    emtposts+= ` <div class="posts">
            <div class="user_names">
              <img src="${val.imageSrc}" alt="">
              <h3>${val.username}</h3>
            </div>
            <div class="content">
              <img src="${val.imageSrc}" alt="">
            </div>
            <div class="actions">
              <div class="left">
                <i class="ri-heart-line"></i>
                <i class="ri-chat-3-line"></i>
                <i class="ri-send-plane-fill"></i>
              </div>
              <div class="right">
                <i class="ri-bookmark-line"></i>
              </div>
            </div>
            <div class="captions">
              <h4>0 likes</h4>
              <p><span class="user_name_b">${val.username}</span> dolor sit amet consectetur adipisicing elit. Autem quis quas dolorum, nisi nesciunt dicta!</p>
              <h5 class="dull">view _comments</h5>
              <h6 class="dull">2 minutes ago</h6>
            </div>
          </div>`

});

posts.innerHTML=emtposts;
  
var stry =document.querySelector(".stry")
var username =document.querySelector(".stry h3")
var growth = document.querySelector(".growth")
var userImage = document.querySelector(".user_names img")

 container.addEventListener("click",function(dets){
  
  var grow = 0;

  var currentStory =  usersArray[dets.target.id].story

  stry.style.display = "initial"
  stry.style.backgroundImage = `url(${currentStory})`
  username.innerHTML = usersArray[dets.target.id].username
  userImage.setAttribute("src",usersArray[dets.target.id].imageSrc)


  var storyInterval = setInterval(function(){
    grow++
    growth.style.width = grow + "%"
    console.log(grow)
  },40)

  setTimeout(function(){
    stry.style.display = "none"
    clearInterval(storyInterval)
  },4000)
  

 })

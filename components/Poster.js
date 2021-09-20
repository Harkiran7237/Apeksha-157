AFRAME.registerComponent('posters',{
  init:function(){
    this.posterContainer=this.el
    this.createPosters()
},
createPosters:function(){
    const thumbnailRef=[
      {
                id: "superman",
                url: "./assets/posters/superman.jpg"
              },
              {
                id: "spiderman",
                url: "./assets/posters/spiderman.jpg"
              },
        
              {
                id: "marvel",
                url: "./assets/posters/marvel.jpg"
              },
              {
                id: "empyre",
                url: "./assets/posters/empyre.jpg"
              }
    ];

    let prevoiusXPosition = -60;

    for (var item of thumbnailRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;
    // let previousXpos=-60

    // for(var item in thumbnailRef){
    //     const posX=previousXpos+30
    //     const posY=10
    //     const posZ=-40
    //     const position={x:posX,y:posY,z:posZ}
    //     previousXpos=posX

        const borderEl=this.createBorder(position,item.id)
        const thumbnail=this.createThumbnail(item)
        borderEl.appendChild(thumbnail)
        
        

        this.posterContainer.appendChild(borderEl)
        
    }
},

createBorder:function(position,id){
    const entityEl=document.createElement('a-entity')
    entityEl.setAttribute('id',id)
    entityEl.setAttribute('visible',true)
    entityEl.setAttribute('geometry',{
      primitive:'ring',
      radiusInner:9,
      radiusOuter:10
    })
    entityEl.setAttribute('position',position)
    entityEl.setAttribute('material',{
      color:'#292c52',
      opacity:0.8,
    })

    return entityEl
  },

  createThumbnail:function(item){
    const entityEl=document.createElement('a-entity')
    entityEl.setAttribute('visible',true)
    entityEl.setAttribute('geometry',{
      primitive:'circle',
      radius:9,
    })
    entityEl.setAttribute('material',{
      src:item.url
    })

    return entityEl
  },



  
})

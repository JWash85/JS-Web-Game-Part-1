function newimage(a, b, c){
    let greenCharacter = document.createElement('img')
    greenCharacter.src = a
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = b
    greenCharacter.style.bottom = c
    document.body.append(greenCharacter)
    /*let pineTree = document.createElement('img')
    pineTree.src = 'assets/pine-tree.png'
    pineTree.style.position = 'fixed'
    pineTree.style.left = '450px'
    pineTree.style.bottom = '200px'
    document.body.append(pineTree)*/
}
newimage('assets/green-character.gif','100px', '100px')
newimage('assets/pine-tree.png','450px', '200px')
newimage('assets/tree.png','200px', '300px')
newimage('assets/pillar.png','350px', '100px')
newimage('assets/crate.png','150px', '200px')
newimage('assets/well.png','500px', '425px')

function newItem (a, b, c){
    let sword = document.createElement('img')
    sword.src = a
    sword.position = 'fixed'
    sword.left = b
    sword.bottom = c
    document.body.append(sword)

    sword.addEventListener('dblclick', function(){
        sword.remove()
})
}
newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')



/************************************************
 Original code from the beginning of assignment
************************************************/

/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)*/
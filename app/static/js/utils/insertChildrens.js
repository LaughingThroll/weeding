function insertChildrens( parent /* HTMLElement */, children /* Array[HTMLElement] */) {
  children.forEach(child => parent.appendChild(child))
}

export default insertChildrens 
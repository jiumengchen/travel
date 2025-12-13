import { onMounted, type Ref } from 'vue'

const callback = (entries: IntersectionObserverEntry[], observer: any) => {
  entries.forEach((item) => {
    if (item.intersectionRatio <= 0) return
    const imgNode = item.target
    const imgNodeSrc = imgNode.getAttribute('data-src')
    imgNode.setAttribute('src', imgNodeSrc as string)
    observer.unobserve(imgNode)
  })
}
const option = {
  threshold: 0.5,
  rootMargin: '0px',
}

const useLazyImage = (ref: Ref) => {
  const observer = new IntersectionObserver(callback as any, option)
  onMounted(() => {
    Object.keys(ref.value).forEach((item) => {
      observer.observe(ref.value[item])
    })
  })
}

export default useLazyImage

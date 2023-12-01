(async ()=>{
  const adapter = await navigator.gpu.requestAdapter()
  const device = await adapter.requestDevice()
  if (device == null) {
    console.error('WebGPU not supported')
    return
  }
  const canvas = document.getElementById('canvas')
})()

<!-- home -->
<template>
  <div class="about-container" id="about-container"></div>
</template>

<script>
import * as THREE from 'three'
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls: null
    }
  },
  computed: {},
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    // 初始化
    init() {
      //  创建场景对象Scene
      this.scene = new THREE.Scene()

      //网格模型添加到场景中
      let geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      let material = new THREE.MeshNormalMaterial({
        color: "white"
      });
      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);

      /**
       * 相机设置
       */
      let container = document.getElementById('about-container')
      this.camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      /**
       * 光源设置
       */
      // 点光源
      var point = new THREE.PointLight(0xffffff)
      point.position.set(400, 200, 300) //点光源位置
      this.scene.add(point) //点光源添加到场景中
      //环境光
      var ambient = new THREE.AmbientLight(0x444444)
      this.scene.add(ambient)
      let axe = new THREE.AxesHelper(20)
      this.scene.add(axe) //辅助工具，用于创建相机时，相机找到合适的位置

      // let pointLight = new THREE.PointLight() //创建点光源
      // pointLight.position.set(4, 2, 4) //设置光源的位置
      // pointLight.intensity = 1.5 //设置光强
      // this.scene.add(pointLight)

      let ambientLight = new THREE.AmbientLight()
      ambientLight.position.set(4, 2, 4)
      this.scene.add(ambientLight)
      /**
       * 创建渲染器对象
       */
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor(0xeeeeee)

      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)

      //创建控件对象
      // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    },
    // 动画
    animate() {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.005
      this.mesh.rotation.y += 0.005
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>
<style lang="scss">
.about-container {
  /* 你的命名空间 */
  background: #fff;
  height: 100vh;
  box-sizing: border-box;
}
</style>

<template>
  <div>
    <div v-if="$frontmatter.home" class="home">
      <!-- Hero 区域 -->
      <header class="wow-hero">
        <!-- 背景装饰 -->
        <div class="hero-background">
          <div class="bg-decoration bg-left"></div>
          <div class="bg-decoration bg-right"></div>
          <div class="bg-particles"></div>
        </div>
        
        <!-- 主要内容 -->
        <div class="hero-content">
          <!-- Logo/图片区域 -->
          <div class="hero-image-container">
            <img 
              v-if="$frontmatter.heroImage" 
              :src="$frontmatter.heroImage" 
              class="hero-image"
              alt="魔兽世界灯塔"
            />
            <div class="image-glow"></div>
          </div>
          
          <!-- 文字内容 -->
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="title-text">{{ $frontmatter.heroText || $site.title }}</span>
              <span class="title-shadow"></span>
            </h1>
            
            <p class="hero-description">
              {{ $frontmatter.tagline || $site.description }}
            </p>
            
            <!-- 行动按钮 -->
            <div class="hero-actions" v-if="$frontmatter.actions">
              <a
                v-for="(action, index) in $frontmatter.actions"
                :key="index"
                :href="action.link"
                class="wow-button"
                :class="[action.type, `button-${index}`]"
              >
                <span class="button-text">{{ action.text }}</span>
                <span class="button-border"></span>
                <span class="button-glow"></span>
              </a>
            </div>
          </div>
        </div>
        
        <!-- 底部装饰 -->
        <div class="hero-bottom">
          <div class="scroll-indicator">
            <span>探索更多</span>
            <div class="scroll-arrow"></div>
          </div>
        </div>
      </header>

      <!-- Features 区域 -->
      <section class="wow-features">
        <div class="features-background">
          <div class="features-bg-pattern"></div>
          <div class="features-bg-glow"></div>
        </div>
        
        <div class="features-container">
          <div class="features-header">
            <h2 class="features-title">核心特色</h2>
            <p class="features-subtitle">探索艾泽拉斯的无限可能</p>
            <div class="title-divider"></div>
          </div>
          
          <div class="features-grid">
            <div 
              v-for="(feature, index) in $frontmatter.features" 
              :key="feature.title"
              class="feature-card"
              :class="`feature-${index + 1}`"
              @click="navigate(feature.link)"
            >
              <div class="feature-icon">
                <img :src="feature.image" :alt="feature.title" />
                <div class="icon-glow"></div>
              </div>
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.details }}</p>
              <div class="feature-hover"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 内容区域 -->
      <main class="wow-content">
        <div class="content-container">
          <!-- 最新攻略 -->
          <section class="content-section">
            <div class="section-header">
              <h2 class="section-title">最新攻略</h2>
              <div class="section-divider"></div>
            </div>
            <div class="guides-grid">
              <div class="guide-card" v-for="i in 3" :key="i">
                <div class="guide-image"></div>
                <div class="guide-content">
                  <h3>团队副本攻略 {{ i }}</h3>
                  <p>最新版本的团队副本详细攻略...</p>
                  <span class="guide-meta">更新于 2小时前</span>
                </div>
              </div>
            </div>
          </section>

          <!-- 职业指南 -->
          <section class="content-section">
            <div class="section-header">
              <h2 class="section-title">职业指南</h2>
              <div class="section-divider"></div>
            </div>
            <div class="classes-grid">
              <div class="class-card" v-for="classItem in $frontmatter.classes" :key="classItem.name">
                <div class="class-icon" :class="classItem.class"></div>
                <h4>{{ classItem.name }}</h4>
              </div>
            </div>
          </section>

          <!-- 社区动态 -->
          <section class="content-section">
            <div class="section-header">
              <h2 class="section-title">社区动态</h2>
              <div class="section-divider"></div>
            </div>
            <div class="community-content">
              <div class="news-card">
                <h3>最新补丁说明</h3>
                <p>了解最新的游戏更新和平衡调整...</p>
              </div>
              <div class="news-card">
                <h3>玩家经验分享</h3>
                <p>来自资深玩家的实用技巧和心得...</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <!-- 页脚 -->
      <footer class="wow-footer">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/images/wow.svg" :alt="$frontmatter.footer.title" />
            <span>{{ $frontmatter.footer.title }}</span>
          </div>
          <p class="footer-text">{{ $frontmatter.footer.rights }}</p>
        </div>
      </footer>
      
    </div>
    <Content v-else />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  
  data() {
    return {}
  },

  methods: {
    navigate(link) {
      if (link) {
        this.$router.push(link);
      }
    }
  }
}
</script>

<style scoped>
.wow-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0c1a2a 0%, #1a3a5f 50%, #0c1a2a 100%);
  overflow: hidden;
  color: #fff;
}

/* 背景装饰 */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.bg-decoration {
  position: absolute;
  width: 300px;
  height: 300px;
  opacity: 0.1;
}

.bg-left {
  top: 10%;
  left: 5%;
  background: radial-gradient(circle, #00a8ff 0%, transparent 70%);
}

.bg-right {
  bottom: 10%;
  right: 5%;
  background: radial-gradient(circle, #ff6b6b 0%, transparent 70%);
}

.bg-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.3) 50%, transparent 100%),
    radial-gradient(2px 2px at 40% 70%, rgba(255,255,255,0.3) 50%, transparent 100%),
    radial-gradient(2px 2px at 60% 20%, rgba(255,255,255,0.3) 50%, transparent 100%),
    radial-gradient(2px 2px at 80% 80%, rgba(255,255,255,0.3) 50%, transparent 100%);
  animation: float 20s infinite linear;
}

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(-20px) rotate(360deg); }
}

/* 主要内容 */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
  padding: 2rem;
}

/* 图片样式 */
.hero-image-container {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.hero-image {
  width: 150px;
  height: 150px;
  filter: drop-shadow(0 0 20px rgba(0, 168, 255, 0.6));
  animation: float-image 3s ease-in-out infinite;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(0, 168, 255, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes float-image {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

/* 文字样式 */
.hero-text {
  margin-bottom: 3rem;
}

.hero-title {
  position: relative;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  background: linear-gradient(135deg, #ffd700 0%, #ff6b6b 50%, #00a8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: title-glow 3s ease-in-out infinite;
}

@keyframes title-glow {
  0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(0, 168, 255, 0.5)); }
}

.hero-description {
  font-size: 1.4rem;
  margin-bottom: 3rem;
  color: #c8d6e5;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* 按钮样式 */
.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.wow-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  min-width: 160px;
}

.wow-button.primary {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
}

.wow-button.secondary {
  background: linear-gradient(135deg, #00a8ff 0%, #0097e6 100%);
  color: white;
}

.button-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  border-radius: 8px;
  background: linear-gradient(135deg, #ffd700, #00a8ff, #ff6b6b) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.wow-button:hover .button-border {
  opacity: 1;
}

.button-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s ease;
}

.wow-button:hover .button-glow {
  left: 100%;
}

.wow-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* 底部滚动指示 */
.hero-bottom {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  z-index: 2;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c8d6e5;
  font-size: 0.9rem;
  opacity: 0.7;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 2px;
  height: 20px;
  background: #c8d6e5;
  margin-top: 0.5rem;
  position: relative;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: -3px;
  width: 8px;
  height: 8px;
  border-right: 2px solid #c8d6e5;
  border-bottom: 2px solid #c8d6e5;
  transform: rotate(45deg);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1.2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .wow-button {
    min-width: 200px;
  }
}

/* Features 区域样式 - 官网深红褐色主题 */
.wow-features {
  position: relative;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #3c2a29 0%, #5a3c34 50%, #3c2a29 100%);
  overflow: hidden;
  border-top: 1px solid rgba(184, 134, 11, 0.3);
  border-bottom: 1px solid rgba(184, 134, 11, 0.3);
}

.features-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.features-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(3px 3px at 20% 30%, rgba(184, 134, 11, 0.2) 50%, transparent 100%),
    radial-gradient(3px 3px at 80% 70%, rgba(205, 133, 63, 0.15) 50%, transparent 100%);
  opacity: 0.4;
}

.features-bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: radial-gradient(ellipse at center, rgba(184, 134, 11, 0.1) 0%, transparent 70%);
}

.features-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #d4af37; /* 金色标题 */
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(212, 175, 55, 0.4);
}

.features-subtitle {
  font-size: 1.2rem;
  color: #e8d5c4; /* 浅米色文字 */
  margin-bottom: 2rem;
}

.title-divider {
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  position: relative;
  background: rgba(60, 42, 41, 0.6);
  border: 1px solid rgba(184, 134, 11, 0.4);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  backdrop-filter: blur(5px);
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #d4af37;
  box-shadow: 0 10px 25px rgba(184, 134, 11, 0.3);
  background: rgba(60, 42, 41, 0.8);
}

.feature-icon {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
}

.feature-icon img {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px rgba(184, 134, 11, 0.6));
}

.icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(184, 134, 11, 0.3) 0%, transparent 70%);
  border-radius: 50%;
}

.feature-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
}

.feature-description {
  color: #e8d5c4;
  line-height: 1.6;
}

.feature-hover {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent);
  transition: left 0.5s ease;
}

.feature-card:hover .feature-hover {
  left: 100%;
}

/* 内容区域样式 - 新配色：深灰绿色主题 */
.wow-content {
  background: linear-gradient(135deg, #1e2a2a 0%, #2d3e3e 50%, #1e2a2a 100%);
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.wow-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(2px 2px at 25% 35%, rgba(72, 187, 120, 0.15) 50%, transparent 100%),
    radial-gradient(2px 2px at 75% 65%, rgba(87, 204, 153, 0.1) 50%, transparent 100%);
  opacity: 0.3;
}

.content-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #48bb78; /* 绿色标题 */
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(72, 187, 120, 0.4);
}

.section-divider {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #48bb78, transparent);
  margin: 0 auto;
}

/* 攻略网格 */
.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.guide-card {
  background: rgba(30, 42, 42, 0.6);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(72, 187, 120, 0.4);
  backdrop-filter: blur(5px);
}

.guide-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(72, 187, 120, 0.25);
  border-color: #48bb78;
  background: rgba(30, 42, 42, 0.8);
}

.guide-image {
  height: 160px;
  background: linear-gradient(135deg, #2d3e3e, #1e2a2a);
  position: relative;
}

.guide-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(72, 187, 120, 0.2), rgba(87, 204, 153, 0.15));
}

.guide-content {
  padding: 1.5rem;
}

.guide-content h3 {
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.guide-content p {
  color: #c8f0e4;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.guide-meta {
  color: #57cc99;
  font-size: 0.9rem;
}

/* 职业网格 */
.classes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.class-card {
  text-align: center;
  padding: 1.5rem 1rem;
  background: rgba(30, 42, 42, 0.6);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(72, 187, 120, 0.4);
  backdrop-filter: blur(5px);
}

.class-card:hover {
  background: rgba(30, 42, 42, 0.8);
  transform: scale(1.05);
  border-color: #48bb78;
  box-shadow: 0 5px 15px rgba(72, 187, 120, 0.3);
}

.class-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #2d3e3e, #3a524b);
  border: 2px solid rgba(72, 187, 120, 0.5);
}

.class-card h4 {
  color: #fff;
  font-size: 0.9rem;
  margin: 0;
}

/* 社区内容 */
.community-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.news-card {
  background: rgba(30, 42, 42, 0.6);
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #48bb78;
  transition: all 0.3s ease;
  border: 1px solid rgba(72, 187, 120, 0.4);
  backdrop-filter: blur(5px);
}

.news-card:hover {
  transform: translateY(-2px);
  border-color: #48bb78;
  background: rgba(30, 42, 42, 0.8);
  box-shadow: 0 5px 15px rgba(72, 187, 120, 0.25);
}

.news-card h3 {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.news-card p {
  color: #c8f0e4;
  line-height: 1.6;
}

/* 页脚样式 - 深褐色主题 */
.wow-footer {
  background: #1a1211;
  padding: 3rem 2rem;
  border-top: 1px solid rgba(184, 134, 11, 0.3);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.footer-logo img {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 0 8px rgba(184, 134, 11, 0.4));
}

.footer-logo span {
  color: #d4af37;
  font-size: 1.2rem;
  font-weight: 600;
}

.footer-text {
  color: #cd853f;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .wow-features,
  .wow-content {
    padding: 3rem 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .features-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .guides-grid {
    grid-template-columns: 1fr;
  }
  
  .classes-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .community-content {
    grid-template-columns: 1fr;
  }
}

</style>
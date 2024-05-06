<template>
  <div class="about-page">
    <section class="contact-us-area">
      <div class="container">
        <div class="row g-5">
          <div class="col-xl-6 col-lg-6">
            <div class="contact-us-info">
              <h3 class="heading-title">
                Chúng tôi luôn mong muốn lắng nghe ý kiến từ bạn
              </h3>
              <ul class="address-list">
                <li>
                  <h5 class="title">Địa chỉ</h5>
                  <p>
                    Trường CNTT&TT - Đại học Bách Khoa Hà Nội<br />
                    Nhà B1, Đại học, số 1 Giải Phóng, Bách Khoa, Hai Bà Trưng,
                    Hà Nội
                  </p>
                </li>
                <li>
                  <h5 class="title">Email</h5>
                  <p>
                    <a href="mailto:ngoclinhtp2002@gmail.com" target="_blank"
                      >ngoclinhtp2002@gmail.com</a
                    >
                  </p>
                </li>
                <li>
                  <h5 class="title">Hotline</h5>
                  <p><a href="tel:+0914135548598">(+84) 968.855.49x</a></p>
                </li>
              </ul>
              <ul class="social-share">
                <li>
                  <a href="#"><i class="icon-share-alt"></i></a>
                </li>
                <li>
                  <a href="#"><i class="icon-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="icon-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="icon-linkedin2"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-form form-style-2">
              <div class="section-title">
                <h4 class="title">Liên hệ</h4>
                <p>Điền vào biểu mẫu sau để nghe tư vấn từ hệ thống.</p>
              </div>

              <form class="rwt-dynamic-form" ref="form">
                <!-- @submit.prevent="sendEmail" -->
                <div class="form-group col-12">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Tên của bạn"
                  />
                </div>
                <div class="form-group col-12">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div class="form-group col-12">
                  <input type="tel" name="phone" placeholder="Số điện thoại" />
                </div>
                <div class="form-group col-12">
                  <textarea
                    name="message"
                    cols="30"
                    rows="4"
                    placeholder="Lời nhắn"
                  ></textarea>
                </div>
                <div class="form-group col-12">
                  <button class="btn" name="submit" type="submit">
                    Gửi phản hồi
                  </button>
                </div>
              </form>

              <ul class="shape-group">
                <MouseMove
                  addClassName="shape-1"
                  dataDepth="1"
                  imgSrc="/images/about/shape-13.png"
                />
                <MouseMove
                  addClassName="shape-2"
                  dataDepth="-1"
                  imgSrc="/images/counterup/shape-02.png"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Google map -->
    <div class="google-map-area">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Tr%C6%B0%E1%BB%9Dng%20C%C3%B4ng%20Ngh%E1%BB%87%20Th%C3%B4ng%20Tin%20Truy%E1%BB%81n%20Th%C3%B4ng%20-%20%C4%90%E1%BA%A1i%20H%E1%BB%8Dc%20B%C3%A1ch%20khoa%20H%C3%A0%20n%E1%BB%99i&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped src="@/assets/scss/pages/about/aboutus.scss"></style>

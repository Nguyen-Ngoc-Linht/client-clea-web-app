<template>
  <div class="blogs">
    <div class="header-blogs grid">
      <!-- Nội dung -->
      <div class="header-content">
        <span class="header-by mb-3">Bài viết nổi bật</span>
        <span class="header-detail mb-2"
          >Tổng hợp các bài viết chia sẻ về kinh nghiệm học tập, giải đáp thắc
          mắc.</span
        >
        <span class="header-text"
          >Chỉ với việc đơn giản đăng bài viết lên hệ thống, thành viên sẽ chia
          sẻ và hỗ trợ cùng các bạn, với thao tác đơn giản và linh hoạt hy vọng
          sẽ đem lại trải nghiệm tốt cho bạn.</span
        >
        <div class="btn-action mt-4">
          <button class="btn btn-start">Bắt đầu ngay</button>
        </div>
      </div>

      <!-- Ảnh minh họa -->
      <div class="header-img">
        <img
          alt="Đăng bài viết cùng CLEA"
          class="img-blogs"
          src="~/assets/images/pages/blogs/blogs.svg"
        />
      </div>
    </div>

    <!-- Input Đăng bài viết -->
    <div class="input-blogs mt-4">
      <div class="box-input">
        <div class="avatar-user">
          <img
            src="https://files.fullstack.edu.vn/f8-prod/blog_posts/8334/64f01064b0724.png"
            alt=""
            class="img-avt"
          />
        </div>

        <div class="input-data">
          <input
            type="text"
            class="input-text"
            placeholder="Hãy chia sẻ kinh nghiệm hoặc vấn đề bạn đang gặp phải?"
          />
        </div>
      </div>
    </div>

    <!-- List Blogs -->
    <div class="listblogs">
      <span class="listblogsheader">Cùng xem danh sách bài viết.</span>
      <div class="list-blog">
        <div class="box-post mt-3">
          <!-- Header -->
          <div class="header-post">
            <!-- Avatar -->
            <div class="avatar-user">
              <img
                src="https://www.shorturl.at/img/shorturl-icon.png"
                alt=""
                class="avt-img"
              />
            </div>
            <div class="user-name ms-2">Nguyễn Ngọc Linh</div>
          </div>
          <div class="post-body row mt-2">
            <!-- Title -->
            <div class="post-content col-8">
              <div class="post-title">
                LÀ THÀNH VIÊN CỦA F8. BẠN ĐÃ THỰC SỰ SỬ DỤNG "F8" HIỆU QUẢ CHƯA?
              </div>
              <div class="post-text mt-2">
                `F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là
                phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm
                bất cứ Extensions nào)
              </div>
              <div class="post-time"></div>
            </div>

            <!-- Image -->
            <div class="post-image col-4">
              <div class="image-item">
                <img
                  src="https://www.shorturl.at/img/shorturl-icon.png"
                  alt=""
                  class="img-post"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="box-post mt-3">
          <!-- Header -->
          <div class="header-post">
            <!-- Avatar -->
            <div class="avatar-user">
              <img
                src="https://www.shorturl.at/img/shorturl-icon.png"
                alt=""
                class="avt-img"
              />
            </div>
            <div class="user-name ms-2">Nguyễn Ngọc Linh</div>
          </div>
          <div class="post-body row mt-2">
            <!-- Title -->
            <div class="post-content col-8">
              <div class="post-title">
                Tôi đã viết Chrome extension đầu tiên của mình bằng Github
                Copilot như thế nào?
              </div>
              <div class="post-text mt-2">
                Câu chuyện của tôi là Tôi đang học tiếng Nhật trên một trang web
                là Dungmori.com, và tôi học từ mới trên trang web Quizlet. Và
                tôi...
              </div>
              <div class="post-time"></div>
            </div>

            <!-- Image -->
            <div class="post-image col-4">
              <div class="image-item">
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/blog_posts/9976/65fa652ce3a64.jpg"
                  alt=""
                  class="img-post"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="box-post mt-3">
          <!-- Header -->
          <div class="header-post">
            <!-- Avatar -->
            <div class="avatar-user">
              <img
                src="https://www.shorturl.at/img/shorturl-icon.png"
                alt=""
                class="avt-img"
              />
            </div>
            <div class="user-name ms-2">Nguyễn Ngọc Linh</div>
          </div>
          <div class="post-body row mt-2">
            <!-- Title -->
            <div class="post-content col-8">
              <div class="post-title">
                Authentication & Authorization trong ReactJS
              </div>
              <div class="post-text mt-2">
                Authentication và Authorization là một phần quan trọng trong
                việc phát triển phần mềm, giúp chúng ta xác thực và phân
                quyền...
              </div>
              <div class="post-time"></div>
            </div>

            <!-- Image -->
            <div class="post-image col-4">
              <div class="image-item">
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/blog_posts/8306/65299d0ce743e.png"
                  alt=""
                  class="img-post"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="box-post mt-3">
          <!-- Header -->
          <div class="header-post">
            <!-- Avatar -->
            <div class="avatar-user">
              <img
                src="https://www.shorturl.at/img/shorturl-icon.png"
                alt=""
                class="avt-img"
              />
            </div>
            <div class="user-name ms-2">Nguyễn Ngọc Linh</div>
          </div>
          <div class="post-body row mt-2">
            <!-- Title -->
            <div class="post-content col-8">
              <div class="post-title">
                LÀ THÀNH VIÊN CỦA F8. BẠN ĐÃ THỰC SỰ SỬ DỤNG "F8" HIỆU QUẢ CHƯA?
              </div>
              <div class="post-text mt-2">
                `F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là
                phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm
                bất cứ Extensions nào)
              </div>
              <div class="post-time"></div>
            </div>

            <!-- Image -->
            <div class="post-image col-4">
              <div class="image-item">
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/blog_posts/8334/64f01064b0724.png"
                  alt=""
                  class="img-post"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="box-post mt-3">
          <!-- Header -->
          <div class="header-post">
            <!-- Avatar -->
            <div class="avatar-user">
              <img
                src="https://www.shorturl.at/img/shorturl-icon.png"
                alt=""
                class="avt-img"
              />
            </div>
            <div class="user-name ms-2">Nguyễn Ngọc Linh</div>
          </div>
          <div class="post-body row mt-2">
            <!-- Title -->
            <div class="post-content col-8">
              <div class="post-title">
                LÀ THÀNH VIÊN CỦA F8. BẠN ĐÃ THỰC SỰ SỬ DỤNG "F8" HIỆU QUẢ CHƯA?
              </div>
              <div class="post-text mt-2">
                `F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là
                phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm
                bất cứ Extensions nào)
              </div>
              <div class="post-time"></div>
            </div>

            <!-- Image -->
            <div class="post-image col-4">
              <div class="image-item">
                <img
                  src="https://www.shorturl.at/img/shorturl-icon.png"
                  alt=""
                  class="img-post"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Chuyển trang -->
      <div class="nativ mt-3">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link">Trang trước</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">...</a></li>
            <li class="page-item"><a class="page-link" href="#">9</a></li>
            <li class="page-item"><a class="page-link" href="#">10</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Trang sau</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      listposts: [],
    };
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/pages/blogs/index.scss"></style>

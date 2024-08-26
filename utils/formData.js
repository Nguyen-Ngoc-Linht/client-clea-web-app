// Định dạng lại mảng Lesson nhận từ API
const formatLessons = (data) => {
  const formattedLessons = data.map((item) => ({
    id: item._id,
    //type: item.details.lessonType != null ? item.details.lessonType : "",
    title: item.title,
    name: item.nameLesson,
    order: item.order,
    //chapterid: item.details.chapter,
    chaptername: item.nameChapter,
    // idVideo: item.items != null ? item.items[0].details.fileUrl : "",
    linkVideo: item.details.linkVideo,
    image: `${process.env.baseUrl}/upload/${item.image}`,
    content: item.content,
  }));

  return formattedLessons;
};

//Chuyển danh sách bài học về định dạng danh sách chương, mỗi chương chứa 1 list Lesson
const formatLessonstoChapters = (data) => {
  const chaptersMap = data.reduce((chapters, item) => {
    const { chaptername } = item;
    if (!chapters[chaptername]) {
      chapters[chaptername] = {
        //chapterid: chapterid,
        chaptername: item.chaptername,
        isVisible: false,
        listlesson: [],
      };
    }
    chapters[chaptername].listlesson.push({
      id: item.id,
      type: item.type,
      title: item.title,
      name: item.name,
      order: item.order,
      idVideo: item.idVideo,
      image: item.image,
      content: item.content,
    });
    return chapters;
  }, {});

  const formattedChapters = Object.values(chaptersMap);
  return formattedChapters;
};

//Chuyển dữ liệu comment api trả về thành định dạng trả cho layout
const formatListComments = (data) => {
  const formattedComment = data.map((item) => {
    const formattedItem = {
      id: item.id,
      name: item.user.name,
      avatar: `${process.env.baseUrl}${item.user.avatarUrl}`,
      content: item.content,
      like: item.number_like,
    };

    return formattedItem;
  });

  return formattedComment.reverse();
};

//Chuyển dữ liệu posts về đúng định dạng trả cho layout
const formatPosts = (data) => {
  const formattedPosts = data.map((item) => ({
    id: item._id,
    body: item.body,
    title: item.title,
    imageLink: `${process.env.baseUrl}${item.images[0].path}`,
    numberlike: item.number_like,
    status: item.status,
    username: item.user.name,
    avataruser: `${process.env.baseUrl}${item.user.avatarUrl}`,
  }));

  return formattedPosts.reverse();
};

export {
  formatLessons,
  formatLessonstoChapters,
  formatListComments,
  formatPosts,
};

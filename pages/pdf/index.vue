<template>
  <client-only>
    <VuePdfPreview
      :style="{ height: height }"
      pdf="http://localhost:2805/BrochureeWIM.pdf"
      :config="config"
      @pages-rendered="pagesRendered"
    />
  </client-only>
</template>

<script>
import "vue-pdf-app/dist/icons/main.css";
export default {
  components: {
    VuePdfPreview: () => import("vue-pdf-app"),
  },
  props: {
    link: {
      type: String,
      default() {
        return "";
      },
    },
    height: {
      type: String,
      default() {
        return "50vh";
      },
    },
  },
  data() {
    return {
      config: {
        sidebar: {
          viewThumbnail: true,
          viewOutline: false,
          viewAttachments: false,
        },
        secondaryToolbar: {
          secondaryPresentationMode: true,
          secondaryOpenFile: true,
          secondaryPrint: true,
          secondaryDownload: true,
          secondaryViewBookmark: true,
          firstPage: true,
          lastPage: true,
          pageRotateCw: false,
          pageRotateCcw: false,
          cursorSelectTool: false,
          cursorHandTool: false,
          scrollVertical: false,
          scrollHorizontal: false,
          scrollWrapped: false,
          spreadNone: false,
          spreadOdd: false,
          spreadEven: false,
          documentProperties: true,
        },
        toolbar: {
          toolbarViewerLeft: {
            findbar: false,
            previous: true,
            next: true,
            pageNumber: true,
          },
          toolbarViewerRight: {
            presentationMode: true,
            openFile: false,
            print: false,
            download: false,
            viewBookmark: false,
          },
          toolbarViewerMiddle: {
            zoomOut: false,
            zoomIn: false,
            scaleSelectContainer: false,
          },
        },
        errorWrapper: true,
      },
    };
  },
  methods: {
    pagesRendered() {
      const viewerContainer = document.getElementById("viewerContainer");
      if (viewerContainer) {
        viewerContainer.scrollTop = 0;
      }
      viewerContainer.classList = "scrollbar";
    },
  },
};
</script>

<style lang="scss">
#vuePdfApp {
  background-color: #fff;
  border-radius: 8px;
  #mainContainer {
    overflow: hidden;
  }
  #sidebarToggle,
  #secondaryToolbarToggle {
    &.vue-pdf-app-icon {
      display: none;
    }
  }
  #toolbarContainer {
    background: #d7d8d9;
  }
  #pageNumber,
  .splitToolbarButtonSeparator {
    background: #fff;
    color: #364560;
  }
  #presentationMode {
    color: #364560;
    &:hover {
      color: #364560;
    }
  }
  .toolbarLabel {
    color: #364560;
  }
  .verticalToolbarSeparator {
    display: none;
  }
  .vue-pdf-app-icon {
    &.page-up,
    &.page-down {
      &::before {
        color: #364560;
      }
    }
    &:disabled {
      cursor: initial;
      &::before {
        opacity: 0.5;
      }
    }
  }
  .toolbar {
    z-index: 9;
    position: absolute;
    bottom: 0;
  }
  #viewerContainer {
    top: 0;
    bottom: 32px;
    #viewer {
      .page {
        border: none;
      }
    }
  }
  #toolbarViewerLeft {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  #toolbarViewerRight {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

import { b as ElButton, E as ElInput } from './el-overlay-5312b424.mjs';
import { ac as useRoute, u as useRouter, $ as $http, a0 as picture_filled_default, ad as plus_default, p as loading_default, ae as circle_close_filled_default, a1 as ElMessage, E as ElIcon } from '../server.mjs';
import { _ as __nuxt_component_0 } from './RichEditor-b6ff57a8.mjs';
import { c as comAddTopic, E as ElImage } from './addTopic-ae17e8de.mjs';
import { useSSRContext, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import moment from 'moment';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { E as ElMessageBox } from './index-a983ad61.mjs';
import '@vueuse/core';
import 'lodash-unified';
import '@vue/shared';
import './focus-trap-ece0c384.mjs';
import '@ctrl/tinycolor';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'otplib';
import 'qrcode';
import 'jsonwebtoken';
import 'mongoose';
import 'ali-oss';
import 'crypto';
import 'request';
import 'zlib';
import 'vue-router';
import '@tiptap/extension-code-block-lowlight';
import '@tiptap/extension-document';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-text';
import '@tiptap/starter-kit';
import '@tiptap/extension-link';
import '@tiptap/extension-highlight';
import '@tiptap/extension-text-align';
import '@tiptap/vue-3';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import 'lowlight';
import '@tiptap-pro/extension-file-handler';
import '@tiptap/extension-image';
import './upload-b00de2b0.mjs';
import './index-336e6da5.mjs';
import '@vue/reactivity';
import './vnode-f2ede823.mjs';
import './el-form-item-89e18b0f.mjs';
import 'async-validator';

const _sfc_main = {
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    let richEditorEl = ref(null);
    let loading = ref(false);
    let form = ref({
      cover: "",
      title: "",
      htmlContent: "",
      textContent: "",
      topics: [],
      type: "moment",
      imgs: []
    });
    let cacheTime = ref();
    let topics = ref([]);
    let typeList = [
      {
        label: "\u52A8\u6001",
        key: "moment"
      },
      {
        label: "\u6587\u7AE0",
        key: "article"
      }
    ];
    getTopicList();
    let timer;
    let selectedTopicsMap = computed(() => {
      let _t = {};
      form.value.topics.forEach((item) => {
        _t[item._id] = true;
      });
      return _t;
    });
    let maxImgs = computed(() => {
      return form.value.type == "photo" ? 99 : 9;
    });
    function getTopicList() {
      $http.get("/api/topic").then((res) => {
        topics.value = res == null ? void 0 : res.data;
      });
    }
    function getPayload() {
      let payload = {
        ...form.value,
        topics: form.value.topics.map((item) => item._id)
      };
      if (form.value.type == "article") {
        payload.textContent = richEditorEl.value.getPureText();
        payload.htmlContent = richEditorEl.value.getHtmlContent();
      } else {
        payload.textContent = form.value.htmlContent;
      }
      return payload;
    }
    function save() {
      loading.value = true;
      let payload = getPayload();
      let req;
      if (form.value._id) {
        req = $http.put("/api/admin/article", payload);
      } else {
        req = $http.post("/api/admin/article", payload);
      }
      req.then((res) => {
        ElMessageBox.alert("\u64CD\u4F5C\u6210\u529F", "\u63D0\u793A", {
          confirmButtonText: "\u786E\u5B9A",
          callback: () => {
            router.back();
          }
        });
      }).catch((err) => {
        ElMessage.error((err == null ? void 0 : err.msg) || "\u672A\u77E5\u9519\u8BEF");
      }).finally(() => {
        clearInterval(timer);
        window.localStorage["cache-article"] = null;
        loading.value = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = ElButton;
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      const _component_RichEditor = __nuxt_component_0;
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "new-article" }, _attrs))} data-v-ed081a34><div class="actions" data-v-ed081a34>`);
      if (unref(cacheTime)) {
        _push(`<div class="time" data-v-ed081a34>${ssrInterpolate(unref(moment)(unref(cacheTime)).format("YYYY MMMM Do, hh:mm:ss"))}\u5DF2\u7F13\u5B58</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_el_button, {
        class: "btn confirm",
        type: "primary",
        onClick: save,
        loading: unref(loading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(form)._id ? "\u4FDD\u5B58" : "\u53D1\u5E03")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(form)._id ? "\u4FDD\u5B58" : "\u53D1\u5E03"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="container" data-v-ed081a34><div class="form-item" data-v-ed081a34><div class="label" data-v-ed081a34>\u7C7B\u578B</div><div class="topics" data-v-ed081a34><!--[-->`);
      ssrRenderList(unref(typeList), (item) => {
        _push(`<div class="${ssrRenderClass([`${unref(form).type == item.key && "active"}`, "topic type"])}" data-v-ed081a34>${ssrInterpolate(item.label)}</div>`);
      });
      _push(`<!--]--></div></div>`);
      if (unref(form).type == "article") {
        _push(`<div class="cover" data-v-ed081a34>`);
        if (!unref(form).cover) {
          _push(ssrRenderComponent(_component_el_icon, { size: "35" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(picture_filled_default), null, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(picture_filled_default))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(form).cover) {
          _push(`<img${ssrRenderAttr("src", unref(form).cover)} data-v-ed081a34>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<input type="file" accept="image/*" style="${ssrRenderStyle({ "position": "absolute", "width": "100%", "height": "100%", "opacity": "0" })}" data-v-ed081a34></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="form-item" data-v-ed081a34><div class="label" data-v-ed081a34>\u6807\u7B7E</div><div class="topics" data-v-ed081a34><!--[-->`);
      ssrRenderList(unref(topics), (item) => {
        _push(`<div class="${ssrRenderClass([unref(selectedTopicsMap)[item._id] && "active", "topic"])}" data-v-ed081a34>${ssrInterpolate(item.name)}</div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(unref(comAddTopic), { onConfirm: getTopicList }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="topic" data-v-ed081a34${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, { size: "15" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(plus_default), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(plus_default))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "topic" }, [
                createVNode(_component_el_icon, { size: "15" }, {
                  default: withCtx(() => [
                    createVNode(unref(plus_default))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(form).type == "article") {
        _push(`<div class="title" data-v-ed081a34>`);
        _push(ssrRenderComponent(_component_el_input, {
          class: "input",
          placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898",
          modelValue: unref(form).title,
          "onUpdate:modelValue": ($event) => unref(form).title = $event,
          maxlength: 100,
          "show-word-limit": ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-ed081a34>`);
      if (unref(form).type == "article") {
        _push(`<div data-v-ed081a34>`);
        _push(ssrRenderComponent(_component_RichEditor, {
          ref_key: "richEditorEl",
          ref: richEditorEl,
          value: unref(form).htmlContent
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).type == "moment") {
        _push(`<textarea class="textarea" placeholder="\u5185\u5BB9" maxlength="800" data-v-ed081a34>${ssrInterpolate(unref(form).htmlContent)}</textarea>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(form).type != "article") {
        _push(`<div class="imgs" data-v-ed081a34><!--[-->`);
        ssrRenderList(unref(form).imgs, (item, index) => {
          _push(`<div class="item" data-v-ed081a34>`);
          if (!item) {
            _push(`<div class="loading" data-v-ed081a34>`);
            _push(ssrRenderComponent(_component_el_icon, {
              class: "icon",
              size: "25"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(unref(loading_default), null, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(unref(loading_default))
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else {
            _push(ssrRenderComponent(_component_el_image, {
              "preview-teleported": true,
              "initial-index": index,
              style: { "width": "100%", "height": "100%" },
              fit: "cover",
              src: item + "?x-oss-process=image/resize,m_fill,w_400",
              "preview-src-list": unref(form).imgs
            }, null, _parent));
          }
          if (item) {
            _push(ssrRenderComponent(_component_el_icon, {
              class: "clear",
              size: 30,
              onClick: ($event) => unref(form).imgs.splice(index, 1)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(unref(circle_close_filled_default), null, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(unref(circle_close_filled_default))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (unref(form).imgs.length < unref(maxImgs)) {
          _push(`<div class="item" data-v-ed081a34><input class="input" type="file" multiple accept="image/*" data-v-ed081a34>`);
          _push(ssrRenderComponent(_component_el_icon, { size: "20" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(picture_filled_default), null, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(picture_filled_default))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/article/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _new = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed081a34"]]);

export { _new as default };
//# sourceMappingURL=new-f34cec5f.mjs.map

function is_int(t) {
    return parseFloat(t) != parseInt(t) || isNaN(t) ? !1 : !0
}
if (function($, t, e, i) {
        var o = $(t);
        $.fn.lazyload = function(n) {
            function s() {
                var t = 0;
                a.each(function() {
                    var e = $(this);
                    if (!l.skip_invisible || e.is(":visible"))
                        if ($.abovethetop(this, l) || $.leftofbegin(this, l));
                        else if ($.belowthefold(this, l) || $.rightoffold(this, l)) {
                        if (++t > l.failure_limit) return !1
                    } else e.trigger("appear"), t = 0
                })
            }
            var a = this,
                r, l = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: t,
                    data_attribute: "original",
                    skip_invisible: !0,
                    appear: null,
                    load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };
            return n && (i !== n.failurelimit && (n.failure_limit = n.failurelimit, delete n.failurelimit), i !== n.effectspeed && (n.effect_speed = n.effectspeed, delete n.effectspeed), $.extend(l, n)), r = l.container === i || l.container === t ? o : $(l.container), 0 === l.event.indexOf("scroll") && r.bind(l.event, function() {
                return s()
            }), this.each(function() {
                var t = this,
                    e = $(t);
                t.loaded = !1, (e.attr("src") === i || e.attr("src") === !1) && e.is("img") && e.attr("src", l.placeholder), e.one("appear", function() {
                    if (!this.loaded) {
                        if (l.appear) {
                            var i = a.length;
                            l.appear.call(t, i, l)
                        }
                        $("<img />").bind("load", function() {
                            var i = e.attr("data-" + l.data_attribute);
                            e.hide(), e.is("img") ? e.attr("src", i) : e.css("background-image", "url('" + i + "')"), e[l.effect](l.effect_speed), t.loaded = !0;
                            var o = $.grep(a, function(t) {
                                return !t.loaded
                            });
                            if (a = $(o), l.load) {
                                var n = a.length;
                                l.load.call(t, n, l)
                            }
                        }).attr("src", e.attr("data-" + l.data_attribute))
                    }
                }), 0 !== l.event.indexOf("scroll") && e.bind(l.event, function() {
                    t.loaded || e.trigger("appear")
                })
            }), o.bind("resize", function() {
                s()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function(t) {
                t.originalEvent && t.originalEvent.persisted && a.each(function() {
                    $(this).trigger("appear")
                })
            }), $(e).ready(function() {
                s()
            }), this
        }, $.belowthefold = function(e, n) {
            var s;
            return s = n.container === i || n.container === t ? (t.innerHeight ? t.innerHeight : o.height()) + o.scrollTop() : $(n.container).offset().top + $(n.container).height(), s <= $(e).offset().top - n.threshold
        }, $.rightoffold = function(e, n) {
            var s;
            return s = n.container === i || n.container === t ? o.width() + o.scrollLeft() : $(n.container).offset().left + $(n.container).width(), s <= $(e).offset().left - n.threshold
        }, $.abovethetop = function(e, n) {
            var s;
            return s = n.container === i || n.container === t ? o.scrollTop() : $(n.container).offset().top, s >= $(e).offset().top + n.threshold + $(e).height()
        }, $.leftofbegin = function(e, n) {
            var s;
            return s = n.container === i || n.container === t ? o.scrollLeft() : $(n.container).offset().left, s >= $(e).offset().left + n.threshold + $(e).width()
        }, $.inviewport = function(t, e) {
            return !($.rightoffold(t, e) || $.leftofbegin(t, e) || $.belowthefold(t, e) || $.abovethetop(t, e))
        }, $.extend($.expr[":"], {
            "below-the-fold": function(t) {
                return $.belowthefold(t, {
                    threshold: 0
                })
            },
            "above-the-top": function(t) {
                return !$.belowthefold(t, {
                    threshold: 0
                })
            },
            "right-of-screen": function(t) {
                return $.rightoffold(t, {
                    threshold: 0
                })
            },
            "left-of-screen": function(t) {
                return !$.rightoffold(t, {
                    threshold: 0
                })
            },
            "in-viewport": function(t) {
                return $.inviewport(t, {
                    threshold: 0
                })
            },
            "above-the-fold": function(t) {
                return !$.belowthefold(t, {
                    threshold: 0
                })
            },
            "right-of-fold": function(t) {
                return $.rightoffold(t, {
                    threshold: 0
                })
            },
            "left-of-fold": function(t) {
                return !$.rightoffold(t, {
                    threshold: 0
                })
            }
        })
    }(jQuery, window, document), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                o = i.data("bs.button"),
                n = "object" == typeof t && t;
            o || i.data("bs.button", o = new e(this, n)), "toggle" == t ? o.toggle() : t && o.setState(t)
        })
    }
    var e = function(t, i) {
        this.$element = $(t), this.options = $.extend({}, e.DEFAULTS, i), this.isLoading = !1
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function(t) {
        var e = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            n = i.data();
        t += "Text", null == n.resetText && i.data("resetText", i[o]()), i[o](null == n[t] ? this.options[t] : n[t]), setTimeout($.proxy(function() {
            "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e))
        }, this), 0)
    }, e.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = $.fn.button;
    $.fn.button = t, $.fn.button.Constructor = e, $.fn.button.noConflict = function() {
        return $.fn.button = i, this
    }, $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var i = $(e.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), e.preventDefault()
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        t && 3 === t.which || ($(o).remove(), $(n).each(function() {
            var i = e($(this)),
                o = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(t = $.Event("hide.bs.dropdown", o)), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o))
        }))
    }

    function e(t) {
        var e = t.attr("data-target");
        e || (e = t.attr("href"), e = e && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var i = e && $(e);
        return i && i.length ? i : t.parent()
    }

    function i(t) {
        return this.each(function() {
            var e = $(this),
                i = e.data("bs.dropdown");
            i || e.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(e)
        })
    }
    var o = ".dropdown-backdrop",
        n = '[data-toggle="dropdown"]',
        s = function(t) {
            $(t).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.2.0", s.prototype.toggle = function(i) {
        var o = $(this);
        if (!o.is(".disabled, :disabled")) {
            var n = e(o),
                s = n.hasClass("open");
            if (t(), !s) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", t);
                var a = {
                    relatedTarget: this
                };
                if (n.trigger(i = $.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus"), n.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var i = $(this);
            if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    s = o.hasClass("open");
                if (!s || s && 27 == t.keyCode) return 27 == t.which && o.find(n).trigger("focus"), i.trigger("click");
                var a = " li:not(.divider):visible a",
                    r = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (r.length) {
                    var l = r.index(r.filter(":focus"));
                    38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = $.fn.dropdown;
    $.fn.dropdown = i, $.fn.dropdown.Constructor = s, $.fn.dropdown.noConflict = function() {
        return $.fn.dropdown = a, this
    }, $(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, s.prototype.toggle).on("keydown.bs.dropdown.data-api", n + ', [role="menu"], [role="listbox"]', s.prototype.keydown)
}(jQuery), + function($) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var o = $(this),
                n = o.data("bs.modal"),
                s = $.extend({}, e.DEFAULTS, o.data(), "object" == typeof t && t);
            n || o.data("bs.modal", n = new e(this, s)), "string" == typeof t ? n[t](i) : s.show && n.show(i)
        })
    }
    var e = function(t, e) {
        this.options = e, this.$body = $(document.body), this.$element = $(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function(t) {
        var e = this,
            i = $.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), this.backdrop(function() {
            var i = $.support.transition && e.$element.hasClass("fade");
            e.$element.parent().length || e.$element.appendTo(e.$body), e.$element.show().scrollTop(0), i && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1), e.enforceFocus();
            var o = $.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? e.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                e.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(300) : e.$element.trigger("focus").trigger(o)
        }))
    }, e.prototype.hide = function(t) {
        t && t.preventDefault(), t = $.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", $.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(t) {
        var e = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = $.support.transition && i;
            if (this.$backdrop = $('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", $.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var n = function() {
                e.removeBackdrop(), t && t()
            };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n()
        } else t && t()
    }, e.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, e.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = $.fn.modal;
    $.fn.modal = t, $.fn.modal.Constructor = e, $.fn.modal.noConflict = function() {
        return $.fn.modal = i, this
    }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = $(this),
            o = i.attr("href"),
            n = $(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = n.data("bs.modal") ? "toggle" : $.extend({
                remote: !/#/.test(o) && o
            }, n.data(), i.data());
        i.is("a") && e.preventDefault(), n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(n, s, this)
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                o = i.data("bs.tooltip"),
                n = "object" == typeof t && t;
            (o || "destroy" != t) && (o || i.data("bs.tooltip", o = new e(this, n)), "string" == typeof t && o[t]())
        })
    }
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(t, e, i) {
        this.enabled = !0, this.type = t, this.$element = $(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
            var s = o[n];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    r = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, $.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(t) {
        return t = $.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, e.prototype.getDelegateOptions = function() {
        var t = {},
            e = this.getDefaults();
        return this._options && $.each(this._options, function(i, o) {
            e[i] != o && (t[i] = o)
        }), t
    }, e.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function() {
            "in" == e.hoverState && e.show()
        }, e.options.delay.show)) : e.show()
    }, e.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function() {
            "out" == e.hoverState && e.hide()
        }, e.options.delay.hide)) : e.hide()
    }, e.prototype.show = function() {
        var t = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var e = $.contains(document.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !e) return;
            var i = this,
                o = this.tip(),
                n = this.getUID(this.type);
            this.setContent(), o.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                r = a.test(s);
            r && (s = s.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var l = this.getPosition(),
                d = o[0].offsetWidth,
                h = o[0].offsetHeight;
            if (r) {
                var p = s,
                    c = this.$element.parent(),
                    f = this.getPosition(c);
                s = "bottom" == s && l.top + l.height + h - f.scroll > f.height ? "top" : "top" == s && l.top - f.scroll - h < 0 ? "bottom" : "right" == s && l.right + d > f.width ? "left" : "left" == s && l.left - d < f.left ? "right" : s, o.removeClass(p).addClass(s)
            }
            var u = this.getCalculatedOffset(s, l, d, h);
            this.applyPlacement(u, s);
            var g = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            $.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
        }
    }, e.prototype.applyPlacement = function(t, e) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            n = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top = t.top + s, t.left = t.left + a, $.offset.setOffset(i[0], $.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), i.addClass("in");
        var r = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == e && l != n && (t.top = t.top + n - l);
        var d = this.getViewportAdjustedDelta(e, t, r, l);
        d.left ? t.left += d.left : t.top += d.top;
        var h = d.left ? 2 * d.left - o + r : 2 * d.top - n + l,
            p = d.left ? "left" : "top",
            c = d.left ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(h, i[0][c], p)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function() {
        function t() {
            "in" != e.hoverState && i.detach(), e.$element.trigger("hidden.bs." + e.type)
        }
        var e = this,
            i = this.tip(),
            o = $.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), $.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(t) {
        t = t || this.$element;
        var e = t[0],
            i = "BODY" == e.tagName;
        return $.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop(),
            width: i ? $(window).width() : t.outerWidth(),
            height: i ? $(window).height() : t.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : t.offset())
    }, e.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var d = e.left - s,
                h = e.left + s + i;
            d < a.left ? n.left = a.left - d : h > a.width && (n.left = a.left + a.width - h)
        }
        return n
    }, e.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, e.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || $(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(t) {
        var e = this;
        t && (e = $(t.currentTarget).data("bs." + this.type), e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e))), e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, e.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = $.fn.tooltip;
    $.fn.tooltip = t, $.fn.tooltip.Constructor = e, $.fn.tooltip.noConflict = function() {
        return $.fn.tooltip = i, this
    }
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new e(this)), "string" == typeof t && o[t]()
        })
    }
    var e = function(t) {
        this.element = $(t)
    };
    e.VERSION = "3.2.0", e.prototype.show = function() {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = e.find(".active:last a")[0],
                n = $.Event("show.bs.tab", {
                    relatedTarget: o
                });
            if (t.trigger(n), !n.isDefaultPrevented()) {
                var s = $(i);
                this.activate(t.closest("li"), e), this.activate(s, s.parent(), function() {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o
                    })
                })
            }
        }
    }, e.prototype.activate = function(t, e, i) {
        function o() {
            n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
        }
        var n = e.find("> .active"),
            s = i && $.support.transition && n.hasClass("fade");
        s ? n.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), n.removeClass("in")
    };
    var i = $.fn.tab;
    $.fn.tab = t, $.fn.tab.Constructor = e, $.fn.tab.noConflict = function() {
        return $.fn.tab = i, this
    }, $(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault(), t.call($(this), "show")
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                o = i.data("bs.collapse"),
                n = $.extend({}, e.DEFAULTS, i.data(), "object" == typeof t && t);
            !o && n.toggle && "show" == t && (t = !t), o || i.data("bs.collapse", o = new e(this, n)), "string" == typeof t && o[t]()
        })
    }
    var e = function(t, i) {
        this.$element = $(t), this.options = $.extend({}, e.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = $(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = $.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var o = i.data("bs.collapse");
                    if (o && o.transitioning) return;
                    t.call(i, "hide"), o || i.data("bs.collapse", null)
                }
                var n = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[n](0), this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!$.support.transition) return s.call(this);
                var a = $.camelCase(["scroll", n].join("-"));
                this.$element.one("bsTransitionEnd", $.proxy(s, this)).emulateTransitionEnd(350)[n](this.$element[0][a])
            }
        }
    }, e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = $.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return $.support.transition ? void this.$element[e](0).one("bsTransitionEnd", $.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = $.fn.collapse;
    $.fn.collapse = t, $.fn.collapse.Constructor = e, $.fn.collapse.noConflict = function() {
        return $.fn.collapse = i, this
    }, $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var i, o = $(this),
            n = o.attr("data-target") || e.preventDefault() || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            s = $(n),
            a = s.data("bs.collapse"),
            r = a ? "toggle" : o.data(),
            l = o.attr("data-parent"),
            d = l && $(l);
        a && a.transitioning || (d && d.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(o).addClass("collapsed"), o[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), t.call(s, r)
    })
}(jQuery), + function($) {
    "use strict";

    function t() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    $.fn.emulateTransitionEnd = function(t) {
        var e = !1,
            i = this;
        $(this).one("bsTransitionEnd", function() {
            e = !0
        });
        var o = function() {
            e || $(i).trigger($.support.transition.end)
        };
        return setTimeout(o, t), this
    }, $(function() {
        $.support.transition = t(), $.support.transition && ($.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(t) {
                return $(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), $(function() {
    var t = $('form#sitesearch input[type="text"]'),
        e = $('form#sitesearch input[type="submit"]');
    e.prop("disabled", "disabled"), t.keyup(function() {
        "" != $(this).val() ? e.removeProp("disabled") : e.prop("disabled", "disabled")
    }), t.focusin(function() {
        e.removeClass("animate-out").addClass("animate-in")
    }), t.focusout(function() {
        e.removeClass("animate-in").addClass("animate-out")
    }), $(".lazy").lazyload({
        effect: "fadeIn",
        threshold: 20
    }), $("#recurring-gift-N").fadeIn("fast"), $("[name=RecurringOption]").on("click focusin", function() {
        $(".hiddenpane").hide().find("input, select").prop("disabled", !0), $("#recurring-gift-" + $(this).val()).fadeIn("fast").find("input, select").prop("disabled", !1)
            /*}), $("html.touch #prefzip, html.touch #BillZip").on("focus", function() {
                $(this).attr("type", "number")
            }), $("html.touch #prefzip, html.touch #BillZip").on("blur", function() {
                $(this).attr("type", "text")
                */
    }), $("#BillingSame").on("click", function() {
        if ($("#BillingSame").is(":checked")) {
            $("#BillAddress1").val($("#prefaddress1").val()), $("#BillAddress2").val($("#prefaddress2").val()), $("#BillCity").val($("#prefcity").val()), $("#BillZip").val($("#prefzip").val());
            var t = $("#prefstate option:selected").val();
            $("#BillState option[value=" + t + "]").prop("selected", "selected");
            var e = $("#prefcountry option:selected").val();
            $("#BillCountry option[value=" + e + "]").prop("selected", "selected")
        } else $("#BillAddress1,#BillAddress2,#BillCity,#BillZip").val(""), $("#BillState option,#BillCountry option").prop("selected", function() {
            return this.defaultSelected
        })
    }), $("#companyMatch").hide().find("input, select").prop("disabled", !0), $("[name=addOptions]").change(function() {
        this.checked ? $("#companyMatch").fadeIn("fast").find("input, select").prop("disabled", !1) : $("#companyMatch").fadeOut("fast").find("input, select").prop("disabled", !0)
    })
});
(jQuery), $(function() {
    console.log('RecurringOption: ' + $("[name=RecurringOption]").val());
    console.log('NumberOfPayments: ' + $("[name=NumberOfPayments]").val());
    console.log('BillingScheduleID: ' + $("[name=BillingScheduleID]").val());
    console.log('Amount: ' + $("[name=Amount]").val());
    console.log('TotalAmount: ' + $("[name=TotalAmount]").val());
    console.log('RecurringAmount: ' + RecurringAmount.value);
    //console.log('recurring_type: ' + recurring_type);
    $(document).click(function() {
        console.log('RecurringOption: ' + $("[name=RecurringOption]").val());
        console.log('NumberOfPayments: ' + $("[name=NumberOfPayments]").val());
        console.log('BillingScheduleID: ' + $("[name=BillingScheduleID]").val());
        console.log('Amount: ' + $("[name=Amount]").val());
        console.log('TotalAmount: ' + $("[name=TotalAmount]").val());
        console.log('RecurringAmount: ' + RecurringAmount.value);
        //console.log('recurring_type: ' + recurring_type);
    });
    $('<style type="text/css">html.svg a#uchicago-wordmark {background-image: url(https://campaign.uchicago.edu/i/template/uchicago_wordmark.svg);max-width: 300px;</style>').appendTo('head');
});
(jQuery), $(function() {
    $(document).ready(function() {
        $("p:contains('2015 The University of Chicago')").html("©2017 The University of Chicago");
        $("p:contains('2016 The University of Chicago')").html("©2017 The University of Chicago");
    });
});

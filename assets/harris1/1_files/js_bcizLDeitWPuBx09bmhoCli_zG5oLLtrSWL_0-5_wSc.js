/* global a2a*/
(function(Drupal) {
    'use strict';
    Drupal.behaviors.addToAny = {
        attach: function(context, settings) {
            // If not the full document (it's probably AJAX), and window.a2a exists
            if (context !== document && window.a2a) {
                a2a.init_all('page'); // Init all uninitiated AddToAny instances
            }
        }
    };
})(Drupal);;
/*!
 * jQuery UI Tabs 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */
(function(e) {
    typeof define == "function" && define.amd ? define(["jquery", "./core", "./widget"], e) : e(jQuery)
})(function(e) {
    return e.widget("ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var e = /#.*$/;
            return function(t) {
                var n, r;
                t = t.cloneNode(!1), n = t.href.replace(e, ""), r = location.href.replace(e, "");
                try {
                    n = decodeURIComponent(n)
                } catch (i) {}
                try {
                    r = decodeURIComponent(r)
                } catch (i) {}
                return t.hash.length > 1 && n === r
            }
        }(),
        _create: function() {
            var t = this,
                n = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible), this._processTabs(), n.active = this._initialActive(), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                return t.tabs.index(e)
            }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(n.active) : this.active = e(), this._refresh(), this.active.length && this.load(n.active)
        },
        _initialActive: function() {
            var t = this.options.active,
                n = this.options.collapsible,
                r = location.hash.substring(1);
            if (t === null) {
                r && this.tabs.each(function(n, i) {
                    if (e(i).attr("aria-controls") === r) return t = n, !1
                }), t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active")));
                if (t === null || t === -1) t = this.tabs.length ? 0 : !1
            }
            return t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), t === -1 && (t = n ? !1 : 0)), !n && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        },
        _tabKeydown: function(t) {
            var n = e(this.document[0].activeElement).closest("li"),
                r = this.tabs.index(n),
                i = !0;
            if (this._handlePageNav(t)) return;
            switch (t.keyCode) {
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                    r++;
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.LEFT:
                    i = !1, r--;
                    break;
                case e.ui.keyCode.END:
                    r = this.anchors.length - 1;
                    break;
                case e.ui.keyCode.HOME:
                    r = 0;
                    break;
                case e.ui.keyCode.SPACE:
                    t.preventDefault(), clearTimeout(this.activating), this._activate(r);
                    return;
                case e.ui.keyCode.ENTER:
                    t.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r);
                    return;
                default:
                    return
            }
            t.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, i), !t.ctrlKey && !t.metaKey && (n.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function() {
                this.option("active", r)
            }, this.delay))
        },
        _panelKeydown: function(t) {
            if (this._handlePageNav(t)) return;
            t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(t) {
            if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
            if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
        },
        _findNextTab: function(t, n) {
            function i() {
                return t > r && (t = 0), t < 0 && (t = r), t
            }
            var r = this.tabs.length - 1;
            while (e.inArray(i(), this.options.disabled) !== -1) t = n ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
        },
        _setOption: function(e, t) {
            if (e === "active") {
                this._activate(t);
                return
            }
            if (e === "disabled") {
                this._setupDisabled(t);
                return
            }
            this._super(e, t), e === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), !t && this.options.active === !1 && this._activate(0)), e === "event" && this._setupEvents(t), e === "heightStyle" && this._setupHeightStyle(t)
        },
        _sanitizeSelector: function(e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                n = this.tablist.children(":has(a[href])");
            t.disabled = e.map(n.filter(".ui-state-disabled"), function(e) {
                return n.index(e)
            }), this._processTabs(), t.active === !1 || !this.anchors.length ? (t.active = !1, this.active = e()) : this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this,
                n = this.tabs,
                r = this.anchors,
                i = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return e("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = e(), this.anchors.each(function(n, r) {
                var i, s, o, u = e(r).uniqueId().attr("id"),
                    a = e(r).closest("li"),
                    f = a.attr("aria-controls");
                t._isLocal(r) ? (i = r.hash, o = i.substring(1), s = t.element.find(t._sanitizeSelector(i))) : (o = a.attr("aria-controls") || e({}).uniqueId()[0].id, i = "#" + o, s = t.element.find(i), s.length || (s = t._createPanel(o), s.insertAfter(t.panels[n - 1] || t.tablist)), s.attr("aria-live", "polite")), s.length && (t.panels = t.panels.add(s)), f && a.data("ui-tabs-aria-controls", f), a.attr({
                    "aria-controls": o,
                    "aria-labelledby": u
                }), s.attr("aria-labelledby", u)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), n && (this._off(n.not(this.tabs)), this._off(r.not(this.anchors)), this._off(i.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var n = 0, r; r = this.tabs[n]; n++) t === !0 || e.inArray(n, t) !== -1 ? e(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var n = {};
            t && e.each(t.split(" "), function(e, t) {
                n[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(e) {
                    e.preventDefault()
                }
            }), this._on(this.anchors, n), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var n, r = this.element.parent();
            t === "fill" ? (n = r.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = e(this),
                    r = t.css("position");
                if (r === "absolute" || r === "fixed") return;
                n -= t.outerHeight(!0)
            }), this.element.children().not(this.panels).each(function() {
                n -= e(this).outerHeight(!0)
            }), this.panels.each(function() {
                e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (n = 0, this.panels.each(function() {
                n = Math.max(n, e(this).height("").height())
            }).height(n))
        },
        _eventHandler: function(t) {
            var n = this.options,
                r = this.active,
                i = e(t.currentTarget),
                s = i.closest("li"),
                o = s[0] === r[0],
                u = o && n.collapsible,
                a = u ? e() : this._getPanelForTab(s),
                f = r.length ? this._getPanelForTab(r) : e(),
                l = {
                    oldTab: r,
                    oldPanel: f,
                    newTab: u ? e() : s,
                    newPanel: a
                };
            t.preventDefault();
            if (s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === !1) return;
            n.active = u ? !1 : this.tabs.index(s), this.active = o ? e() : s, this.xhr && this.xhr.abort(), !f.length && !a.length && e.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, l)
        },
        _toggle: function(t, n) {
            function o() {
                r.running = !1, r._trigger("activate", t, n)
            }

            function u() {
                n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), i.length && r.options.show ? r._show(i, r.options.show, o) : (i.show(), o())
            }
            var r = this,
                i = n.newPanel,
                s = n.oldPanel;
            this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function() {
                n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u()
            }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s.hide(), u()), s.attr("aria-hidden", "true"), n.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && s.length ? n.oldTab.attr("tabIndex", -1) : i.length && this.tabs.filter(function() {
                return e(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false"), n.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var n, r = this._findActive(t);
            if (r[0] === this.active[0]) return;
            r.length || (r = this.active), n = r.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            })
        },
        _findActive: function(t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function(e) {
            return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var t = e(this),
                    n = t.data("ui-tabs-aria-controls");
                n ? t.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function(t) {
            var n = this.options.disabled;
            if (n === !1) return;
            t === undefined ? n = !1 : (t = this._getIndex(t), e.isArray(n) ? n = e.map(n, function(e) {
                return e !== t ? e : null
            }) : n = e.map(this.tabs, function(e, n) {
                return n !== t ? n : null
            })), this._setupDisabled(n)
        },
        disable: function(t) {
            var n = this.options.disabled;
            if (n === !0) return;
            if (t === undefined) n = !0;
            else {
                t = this._getIndex(t);
                if (e.inArray(t, n) !== -1) return;
                e.isArray(n) ? n = e.merge([t], n).sort() : n = [t]
            }
            this._setupDisabled(n)
        },
        load: function(t, n) {
            t = this._getIndex(t);
            var r = this,
                i = this.tabs.eq(t),
                s = i.find(".ui-tabs-anchor"),
                o = this._getPanelForTab(i),
                u = {
                    tab: i,
                    panel: o
                },
                a = function(e, t) {
                    t === "abort" && r.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === r.xhr && delete r.xhr
                };
            if (this._isLocal(s[0])) return;
            this.xhr = e.ajax(this._ajaxSettings(s, n, u)), this.xhr && this.xhr.statusText !== "canceled" && (i.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function(e, t, i) {
                setTimeout(function() {
                    o.html(e), r._trigger("load", n, u), a(i, t)
                }, 1)
            }).fail(function(e, t) {
                setTimeout(function() {
                    a(e, t)
                }, 1)
            }))
        },
        _ajaxSettings: function(t, n, r) {
            var i = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, s) {
                    return i._trigger("beforeLoad", n, e.extend({
                        jqXHR: t,
                        ajaxSettings: s
                    }, r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var n = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n))
        }
    })
});;
/*jshint browser:true */
/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
;
(function($) {
    'use strict';
    $.fn.fitVids = function(options) {
        var settings = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById('fit-vids-style')) {
            // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
            var head = document.head || document.getElementsByTagName('head')[0];
            var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
            var div = document.createElement("div");
            div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
            head.appendChild(div.childNodes[1]);
        }
        if (options) {
            $.extend(settings, options);
        }
        return this.each(function() {
            var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', 'object', 'embed'];
            if (settings.customSelector) {
                selectors.push(settings.customSelector);
            }
            var ignoreList = '.fitvidsignore';
            if (settings.ignore) {
                ignoreList = ignoreList + ', ' + settings.ignore;
            }
            var $allVideos = $(this).find(selectors.join(','));
            $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
            $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.
            $allVideos.each(function() {
                var $this = $(this);
                if ($this.parents(ignoreList).length > 0) {
                    return; // Disable FitVids on this video.
                }
                if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
                    return;
                }
                if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
                    $this.attr('height', 9);
                    $this.attr('width', 16);
                }
                var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
                    width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
                    aspectRatio = height / width;
                if (!$this.attr('name')) {
                    var videoName = 'fitvid' + $.fn.fitVids._count;
                    $this.attr('name', videoName);
                    $.fn.fitVids._count++;
                }
                $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + '%');
                $this.removeAttr('height').removeAttr('width');
            });
        });
    };
    // Internal counter for unique video names.
    $.fn.fitVids._count = 0;
    // Works with either jQuery or Zepto
})(window.jQuery || window.Zepto);;
/**
 * jquery-match-height master by @liabru
 * http://brm.io/jquery-match-height/
 * License: MIT
 */
;
(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
     *  internal
     */
    var _previousResizeWidth = -1,
        _updateTimeout = -1;
    /*
     *  _parse
     *  value parse utility function
     */
    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };
    /*
     *  _rows
     *  utility function returns array of jQuery selections representing each row
     *  (as displayed after float wrapping applied by browser)
     */
    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];
        // group elements by their top position
        $elements.each(function() {
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }
            // keep track of the last row top
            lastTop = top;
        });
        return rows;
    };
    /*
     *  _parseOptions
     *  handle plugin options
     */
    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };
        if (typeof options === 'object') {
            return $.extend(opts, options);
        }
        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }
        return opts;
    };
    /*
     *  matchHeight
     *  plugin definition
     */
    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);
        // handle remove
        if (opts.remove) {
            var that = this;
            // remove fixed height from all selected elements
            this.css(opts.property, '');
            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });
            // TODO: cleanup empty groups
            return this;
        }
        if (this.length <= 1 && !opts.target) {
            return this;
        }
        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });
        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);
        return this;
    };
    /*
     *  plugin global options
     */
    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;
    /*
     *  matchHeight._apply
     *  apply matchHeight to given elements
     */
    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];
        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);
        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');
        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });
        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');
        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {
            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');
                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }
                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));
                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });
            // get the array of rows (based on element top position)
            rows = _rows($elements);
            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }
        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;
            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }
                // iterate the row and find the max height
                $row.each(function() {
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');
                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }
                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = {
                        'display': display
                    };
                    css[opts.property] = '';
                    $that.css(css);
                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }
                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }
            // iterate the row and apply the height to all elements
            $row.each(function() {
                var $that = $(this),
                    verticalPadding = 0;
                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }
                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }
                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });
        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });
        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }
        return this;
    };
    /*
     *  matchHeight._applyDataApi
     *  applies matchHeight to all elements with a data-match-height attribute
     */
    matchHeight._applyDataApi = function() {
        var groups = {};
        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');
            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });
        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };
    /*
     *  matchHeight._update
     *  updates matchHeight on all current groups with their correct options
     */
    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }
        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });
        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };
    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }
        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };
    /*
     *  bind events
     */
    // apply on DOM ready event
    $(matchHeight._applyDataApi);
    // update heights on load and resize events
    $(window).bind('load', function(event) {
        matchHeight._update(false, event);
    });
    // throttled update heights on resize events
    $(window).bind('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });
});;
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
/*jshint browser: true, strict: true, undef: true */
/*global define: false */
(function(window) {
    'use strict';
    // class helper functions from bonzo https://github.com/ded/bonzo
    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;
    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }
    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }
})(window);
(function() {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }
    [].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }
        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }
})();;
(function(Drupal) {
    'use strict';
    window.onload = function() {
        var closeInfo = document.querySelector('.info-dropdown-target');
        var closer = document.querySelector('.closer');
        var normalInfo = document.querySelector('.normal-menu');
        var closeMenu = document.querySelector('.title-center-menu');
        var barOne = document.querySelector('.bar-one');
        var barTwo = document.querySelector('.bar-two');
        var barThree = document.querySelector('.bar-three');
        if (closeMenu) {
            closeMenu.addEventListener('click', function() {
                //If the 'Info For' menu is open then this will close it to avoid having both menys open simultaneously.
                if (closeInfo.classList.contains('info-open')) {
                    closeInfo.classList.remove('info-open');
                    closer.classList.add('show-hide');
                    normalInfo.classList.remove('show-hide');
                    document.querySelector('.mobile-menu-info').classList.remove('mobile-info-slide-down');
                }
                //If the menu dropdown is closed then this opens it. If it's already open then it closes it.
                if (!closeMenu.classList.contains('menu-open')) {
                    document.querySelector('.mobile-dropdown-target').innerHTML = "CLOSE";
                    closeMenu.classList.add('menu-open');
                    barTwo.classList.add('bar-hide');
                    barOne.classList.add('rotateDown');
                    barThree.classList.add('rotateUp');
                    document.querySelector('.mobile-menu-menu').classList.add('mobile-menu-slide-down');
                } else {
                    document.querySelector('.mobile-dropdown-target').innerHTML = "MENU";
                    closeMenu.classList.remove('menu-open');
                    barTwo.classList.remove('bar-hide');
                    barOne.classList.remove('rotateDown');
                    barThree.classList.remove('rotateUp');
                    document.querySelector('.mobile-menu-menu').classList.remove('mobile-menu-slide-down');
                }
            })
        }
        if (closeInfo) {
            closeInfo.addEventListener('click', function() {
                //if the main menu is open then this will close it.
                if (closeMenu.classList.contains('menu-open')) {
                    document.querySelector('.mobile-dropdown-target').innerHTML = "MENU";
                    closeMenu.classList.remove('menu-open');
                    barTwo.classList.remove('bar-hide');
                    barOne.classList.remove('rotateDown');
                    barThree.classList.remove('rotateUp');
                    document.querySelector('.mobile-menu-menu').classList.remove('mobile-menu-slide-down');
                }
                //This changes the innerhtml of the info menu in order to show the close button.
                if (!closeInfo.classList.contains('info-open')) {
                    normalInfo.classList.add('show-hide');
                    closeInfo.classList.add('info-open');
                    closer.classList.remove('show-hide');
                    document.querySelector('.mobile-menu-info').classList.add('mobile-info-slide-down');
                    closer.innerHTML = "<div class='title-center-menu menu-open'>" + "<span class='mobile-info-target'>CLOSE</span>" + "<div class='mobile-menu-icon'>" + "<div class='bar bar-one-2 rotateDown'></div>" + "<div class='bar bar-two-2 bar-hide'></div>" + "<div class='bar bar-three-2 rotateUp'></div>" + "</div>" + "</div>"
                    document.querySelector('.bar-one-2').classList.add('rotateDown');
                    document.querySelector('.bar-two-2').classList.add('bar-hide');
                    document.querySelector('.bar-three-2').classList.add('rotateUp');
                } else {
                    closeInfo.classList.remove('info-open');
                    closer.classList.add('show-hide');
                    normalInfo.classList.remove('show-hide');
                    document.querySelector('.mobile-menu-info').classList.remove('mobile-info-slide-down');
                }
            })
        }
    };
    // Toggle accordion drawers
    var accordionTitle = '.field--name-field-question, .node--content--accordion .field__label';
    var accordionContent = '.field--name-field-answer, .field__items, .field__item';
    jQuery(accordionTitle).click(function(e) {
        jQuery(this).siblings(accordionContent).slideToggle('fast');
        jQuery(this).toggleClass('is-expanded');
        e.preventDefault();
    });

    // Trigger page scroll to load hero grid items
    var heroGrid = jQuery(".node--hero--grid");
    jQuery(window).scroll(function() {
        if (jQuery(heroGrid).length > 0) {
            var elementTopToPageTop = jQuery(heroGrid).offset().top;
            var windowTopToPageTop = jQuery(window).scrollTop();
            var windowInnerHeight = window.innerHeight;
            var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
            var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
            var distanceFromBottomToAppear = 400;
            if (elementTopToWindowBottom > distanceFromBottomToAppear) {
                jQuery(heroGrid).addClass('js-node--hero--grid--show');
            }
        }
    });
    // --------------------------------------------------------------------------------------------------------
    // Start search page fieldset change.
    // --------------------------------------------------------------------------------------------------------
    // Add wrapper and remove the legend.
    jQuery('#views-exposed-form-search-content-search-content-page fieldset.fieldgroup').wrapInner('<div class="filters filter-wrap container fieldset-wrapper"></div>');
    // Move search filters above and out of the filters wrapper.
    var selector_fieldset = '#block-exposedformsearch-contentsearch-content-page fieldset.fieldgroup.form-wrapper';
    var selector_input = '#block-exposedformsearch-contentsearch-content-page div.filters div.js-form-item.form-item';
    var fieldset_obj = jQuery(selector_fieldset).detach();
    fieldset_obj.insertBefore(selector_input).addClass('js-search-filter-block');
    // --------------------------------------------------------------------------------------------------------
    // End search page fieldset change.
    // --------------------------------------------------------------------------------------------------------
    // Initiate fitvids
    jQuery('.node--content--main--video').fitVids();
    jQuery(document).ready(function() {
        // Hide Secondary menu children that are not in active trail.
        jQuery('.secondary-nav__child-link.is-active').parentsUntil('.secondary-nav__item').addClass('in-active-trail');
        jQuery('.secondary-nav__item-link.is-active').next('.secondary-nav__children').addClass('in-active-trail');
        jQuery('.view-page--filters .bef-toggle').click(function(e) {
            jQuery('.view-page--filters .form-submit').trigger("click");
        });
    });
    // Mobile toggle
    var chevron = '.chevron';
    jQuery(chevron).click(function(e) {
        jQuery(this).parent().siblings().toggleClass('is-expanded');
        jQuery(this).parent().parent().siblings().toggleClass('is-expanded');
        jQuery(this).toggleClass('bottom');
        e.preventDefault();
    });
    jQuery('.view-page--filters input[type=checkbox]').click(function(e) {
        jQuery('.view-page--filters .form-submit').trigger("click");
    });
    jQuery('.view-page--filters input[type=text]').blur(function() {
        jQuery('.view-page--filters .form-submit').click();
    });
    jQuery('.view-page--filters .bef-toggle').click(function(e) {
        console.log('I click');
        jQuery('.view-page--filters .form-submit').trigger("click");
    });
    // Set height for you might also be interested in block
    jQuery('.view-interested-in .node--related-content-teaser').matchHeight();
    // Responsive tables
    var tableContainer = jQuery('.l-main').width();
    // Add class to tables that are too wide.
    jQuery('.l-main table').each(function() {
        if (jQuery(this).width() > tableContainer) {
            jQuery(this).addClass('too-wide');
        }
    });
    jQuery('th').each(function() {
        var eq = jQuery(this).index();
        var child = eq + 1;
        var label = jQuery(this).text();
        jQuery('td:nth-child(' + child + ')').append('&nbsp;').attr('data-title', label).addClass('responsive');
    });
    jQuery('.menu-button').on('click', function() {
        jQuery(this).toggleClass('open');
        if (jQuery('.main-navigation__wrap').hasClass('open')) {
            jQuery('.main-navigation__wrap').removeClass('open');
            jQuery('.main-navigation__wrap').removeClass('sub-menu');
            jQuery('.back-item').remove();
        } else {
            jQuery('.main-navigation__wrap').addClass('open');
        }
    });
    jQuery('.main-navigation__item-link').on('click', function(e) {
        // responsive menu is being used when window is less than 900px wide,
        if (jQuery('.main-navigation__wrap').hasClass('sub-menu')) {
            // allow clicks on full sized menu to go to the link.
        } else {
            if (jQuery(window).width() < 900) {
                // makes the primary nav open the submenu instead of going to the page
                e.preventDefault();
            }
            //console.log(jQuery(this));
            jQuery(this).next().addClass('active-submenu');
            jQuery(this).parent().addClass('keep-visible').parent().prepend('<li class="back-item"><a>Back</a></li>');
            jQuery('.main-navigation__wrap').addClass('sub-menu');
        }
    });
    jQuery(document).on('click', '.back-item', function(e) {
        e.preventDefault();
        jQuery('.main-navigation__wrap').removeClass('sub-menu');
        jQuery('.main-navigation__child-container').removeClass('active-submenu');
        jQuery('.main-navigation__item').removeClass('keep-visible');
        jQuery('.back-item').remove();
    });
    jQuery('.search-block form input#edit-keys').attr("placeholder", "Search...");
    jQuery('.search-link').on('click', function(e) {
        e.preventDefault();
        if (jQuery('.search-block').hasClass('open')) {
            jQuery(this).removeClass('active');
            jQuery('.search-block').removeClass('open');
        } else {
            jQuery(this).addClass('active');
            jQuery('.search-block').addClass('open');
        }
    });
    // hide search box if active and clicked outside
    jQuery(document).click(function(e) {
        var container = jQuery('.search-block'),
            link = jQuery('.search-link');
        // if the clicked element is not the link (or any element inside it) or the search box (or any element inside)
        // and the search box is open
        if (!container.is(e.target) && !container.has(e.target).length > 0 && !link.is(e.target) && !link.has(e.target).length > 0 && container.hasClass('open')) {
            link.removeClass('active');
            container.removeClass('open');
        }
    });
    // Add has-children class to utility nav parent
    jQuery('.header .utility-navigation__item:has(div)').addClass('has-children').append('<span class="arrow-utility"></span>');
    jQuery('.header .utility-navigation__item .arrow-utility').on('click', function(e) {
        jQuery(this).siblings('.utility-navigation__child-container').toggle();
        jQuery(this).toggleClass('is-open');
    });
    jQuery(document).ready(function($) {
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 300,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            offset_opacity = 1200,
            //duration of the top scrolling animation (in ms)
            scroll_top_duration = 700,
            //grab the "back to top" link
            $back_to_top = $('.cd-top');
        //hide or show the "back to top" link
        $(window).scroll(function() {
            ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
            if ($(this).scrollTop() > offset_opacity) {
                $back_to_top.addClass('cd-fade-out');
            }
        });
        //smooth scroll to top
        $back_to_top.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration);
        });
        // Move the results counter below the search input on results page
        jQuery('.view-search-content .view-header').appendTo('#block-exposedformsearch-contentsearch-content-page .form-type-textfield');
        //Detect if upcoming events and recent news are present
        if ($('.node--content--bottom').length > 0) {
            var amount = 0;
            amount = ($('.node--content--upcoming-events').length + $('.node--content--expanded-recent-news').length);
            switch (amount) {
                case 2:
                    $('.node--content--bottom').addClass('both');
                    break;
                case 1:
                    $('.node--content--bottom').addClass('single');
                    break;
                default:
                    $('.node--content--bottom').addClass('none');
            }
        }
    });
    // if URL contains string mark news-link as active
    jQuery(document).ready(function() {
        if (window.location.href.indexOf("profile") > -1) {
            jQuery(".news-links__item").eq(1).addClass("is-active");
        } else if (window.location.href.indexOf("research") > -1) {
            jQuery(".news-links__item").eq(2).addClass("is-active");
        } else if (window.location.href.indexOf("in-the-news") > -1) {
            jQuery(".news-links__item").eq(3).addClass("is-active");
        } else if (window.location.href.indexOf("visiting-speakers") > -1) {
            jQuery(".news-links__item").eq(5).addClass("is-active");
        } else if (window.location.href.indexOf("academic-conferences") > -1) {
            jQuery(".news-links__item").eq(0).addClass("is-active");
        } else if (window.location.href.indexOf("admissions") > -1) {
            jQuery(".news-links__item").eq(1).addClass("is-active");
        } else if (window.location.href.indexOf("alumni") > -1) {
            jQuery(".news-links__item").eq(2).addClass("is-active");
        } else if (window.location.href.indexOf("students") > -1) {
            jQuery(".news-links__item").eq(3).addClass("is-active");
        } else if (window.location.href.indexOf("special-events") > -1) {
            jQuery(".news-links__item").eq(4).addClass("is-active");
        } else if (window.location.href.indexOf("/news-events/news") > -1) {
            jQuery(".news-links__item").eq(0).addClass("is-active");
        } else if (window.location.href.indexOf("/news-events/events") > -1) {
            jQuery(".news-links__item").eq(0).removeClass("is-active");
        }
    });
    // if current page is a news page of one of the types, move the view heading to the top of the page
    if (window.location.href.indexOf("profile") > -1 || window.location.href.indexOf("research") > -1 || window.location.href.indexOf("in-the-news") > -1 || window.location.href.indexOf("news") > -1) {
        jQuery(".view--content--news .views-element-container h2").appendTo(".news-view-heading");
    }
    // if user clicks search icon redirect cursor to the search input
    var searchLink = '.search-link.utility-navigation__item';
    var searchInput = '.search-block.open input#edit-keys';
    jQuery(searchLink).click(function(e) {
        jQuery(searchInput).focus();
        e.preventDefault();
    });
})(Drupal);;
(function($, Drupal, window, document) {
    Drupal.behaviors.basic = {
        attach: function(context, settings) {
            $(window).load(function() {
                $('.tab_content').each(function(i) {
                    var harris_index = i + 1;
                    var tabname = "tab-" + harris_index; 
                    $(this).attr("id", tabname);
                });
                $(".node--content--tabs").tabs({});
                $(".node--content--tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
                $(".node--content--tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");  
                $('.slideshow').slick({
                    slidesToScroll: 1,
                    centerMode: true,
                    slidesToShow: 1,
                    // variableWidth: true,
                    infinite: false,
                    appendArrows: $('.arrow_container'),
                    centerPadding: '0px',
                    adaptiveHeight: true,
                    dots: true,
                    dotsClass: 'custom_paging',
                    customPaging: function(slider, i) {
                        return (i + 1) + ' of ' + slider.slideCount;
                    }
                });
                if ($('ul.secondary-nav__great-grandchildren').hasClass('in-active-trail')) {
                    $('li.top-level__item').siblings().find('.secondary-nav__item-link').addClass('demoted_family_links');
                    $('li.secondary-nav__child-item').siblings().find('.child').addClass('demoted_family_links');
                    $('ul.secondary-nav__grandchildren').addClass('elevated');
                }
                if ($('ul.secondary-nav__grandchildren').hasClass('in-active-trail')) {
                    $('li.top-level__item').siblings().find('.secondary-nav__item-link').addClass('demoted_family_links');
                    $('ul.secondary-nav__children').addClass('elevated');
                }
                if ($('ul.secondary-nav__children li.secondary-nav__child-item').hasClass('in-active-trail')) {
                    $('li.top-level__item').siblings().find('.secondary-nav__item-link').addClass('demoted_family_links');
                    $('ul.secondary-nav__children').addClass('elevated');
                }
            });
        }
    };
}(jQuery, Drupal, this, this.document));;
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    'use strict';
    var Slick = window.Slick || {};
    Slick = (function() {
        var instanceUid = 0;

        function Slick(element, settings) {
            var _ = this,
                dataSettings;
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
            $.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $(element).data('slick') || {};
            _.options = $.extend({}, _.defaults, settings, dataSettings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options;
            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.instanceUid = instanceUid++;
            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(true);
        }
        return Slick;
    }());
    Slick.prototype.activateADA = function() {
        var _ = this;
        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }
        _.unload();
        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };
    Slick.prototype.animateSlide = function(targetLeft, callback) {
        var animProps = {},
            _ = this;
        _.animateHeight();
        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);
                if (callback) {
                    setTimeout(function() {
                        _.disableTransition();
                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };
    Slick.prototype.getNavTarget = function() {
        var _ = this,
            asNavFor = _.options.asNavFor;
        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }
        return asNavFor;
    };
    Slick.prototype.asNavFor = function(index) {
        var _ = this,
            asNavFor = _.getNavTarget();
        if (asNavFor !== null && typeof asNavFor === 'object') {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };
    Slick.prototype.applyTransition = function(slide) {
        var _ = this,
            transition = {};
        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.autoPlay = function() {
        var _ = this;
        _.autoPlayClear();
        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };
    Slick.prototype.autoPlayClear = function() {
        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };
    Slick.prototype.autoPlayIterator = function() {
        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;
        if (!_.paused && !_.interrupted && !_.focussed) {
            if (_.options.infinite === false) {
                if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
                    _.direction = 0;
                } else if (_.direction === 0) {
                    slideTo = _.currentSlide - _.options.slidesToScroll;
                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }
            _.slideHandler(slideTo);
        }
    };
    Slick.prototype.buildArrows = function() {
        var _ = this;
        if (_.options.arrows === true) {
            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
            if (_.slideCount > _.options.slidesToShow) {
                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }
                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {
                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };
    Slick.prototype.buildDots = function() {
        var _ = this,
            i, dot;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$slider.addClass('slick-dotted');
            dot = $('<ul />').addClass(_.options.dotsClass);
            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }
            _.$dots = dot.appendTo(_.options.appendDots);
            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
    };
    Slick.prototype.buildOut = function() {
        var _ = this;
        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
        _.slideCount = _.$slides.length;
        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });
        _.$slider.addClass('slick-slider');
        _.$slideTrack = (_.slideCount === 0) ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }
        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };
    Slick.prototype.buildRows = function() {
        var _ = this,
            a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
        if (_.options.rows > 1) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': (100 / _.options.slidesPerRow) + '%',
                'display': 'inline-block'
            });
        }
    };
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }
        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
            targetBreakpoint = null;
            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }
            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };
    Slick.prototype.changeSlide = function(event, dontAnimate) {
        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;
        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }
        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }
        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
        switch (event.data.message) {
            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;
            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;
            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;
            default:
                return;
        }
    };
    Slick.prototype.checkNavigable = function(index) {
        var _ = this,
            navigables, prevNavigable;
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }
        return index;
    };
    Slick.prototype.cleanUpEvents = function() {
        var _ = this;
        if (_.options.dots && _.$dots !== null) {
            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
        _.$slider.off('focus.slick blur.slick');
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }
        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
        _.$list.off('click.slick', _.clickHandler);
        $(document).off(_.visibilityChange, _.visibility);
        _.cleanUpSlideEvents();
        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }
        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.cleanUpSlideEvents = function() {
        var _ = this;
        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };
    Slick.prototype.cleanUpRows = function() {
        var _ = this,
            originalSlides;
        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };
    Slick.prototype.clickHandler = function(event) {
        var _ = this;
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };
    Slick.prototype.destroy = function(refresh) {
        var _ = this;
        _.autoPlayClear();
        _.touchObject = {};
        _.cleanUpEvents();
        $('.slick-cloned', _.$slider).detach();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && _.$prevArrow.length) {
            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }
        if (_.$nextArrow && _.$nextArrow.length) {
            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }
        if (_.$slides) {
            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function() {
                $(this).attr('style', $(this).data('originalStyling'));
            });
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides);
        }
        _.cleanUpRows();
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');
        _.unslicked = true;
        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };
    Slick.prototype.disableTransition = function(slide) {
        var _ = this,
            transition = {};
        transition[_.transitionType] = '';
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });
            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });
            if (callback) {
                setTimeout(function() {
                    _.disableTransition(slideIndex);
                    callback.call();
                }, _.options.speed);
            }
        }
    };
    Slick.prototype.fadeSlideOut = function(slideIndex) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
        var _ = this;
        if (filter !== null) {
            _.$slidesCache = _.$slides;
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function(event) {
            event.stopImmediatePropagation();
            var $sf = $(this);
            setTimeout(function() {
                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
        var _ = this;
        return _.currentSlide;
    };
    Slick.prototype.getDotCount = function() {
        var _ = this;
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }
        return pagerQty - 1;
    };
    Slick.prototype.getLeft = function(slideIndex) {
        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }
        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }
        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }
        if (_.options.variableWidth === true) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }
            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }
            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }
        return targetLeft;
    };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
        var _ = this;
        return _.options[option];
    };
    Slick.prototype.getNavigableIndexes = function() {
        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;
        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
        return indexes;
    };
    Slick.prototype.getSlick = function() {
        return this;
    };
    Slick.prototype.getSlideCount = function() {
        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;
        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });
            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };
    Slick.prototype.init = function(creation) {
        var _ = this;
        if (!$(_.$slider).hasClass('slick-initialized')) {
            $(_.$slider).addClass('slick-initialized');
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }
        if (creation) {
            _.$slider.trigger('init', [_]);
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }
        if (_.options.autoplay) {
            _.paused = false;
            _.autoPlay();
        }
    };
    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });
        _.$slideTrack.attr('role', 'listbox');
        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr('role', 'option');
            //Evenly distribute aria-describedby tags through available dots.
            var describedBySlideId = _.options.centerMode ? i : Math.floor(i / _.options.slidesToShow);
            if (_.options.dots === true) {
                $(this).attr('aria-describedby', 'slick-slide' + _.instanceUid + describedBySlideId + '');
            }
        });
        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
        }
        _.activateADA();
    };
    Slick.prototype.initArrowEvents = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }
    };
    Slick.prototype.initDotEvents = function() {
        var _ = this;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }
        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {
            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initSlideEvents = function() {
        var _ = this;
        if (_.options.pauseOnHover) {
            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initializeEvents = function() {
        var _ = this;
        _.initArrowEvents();
        _.initDotEvents();
        _.initSlideEvents();
        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('click.slick', _.clickHandler);
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.initUI = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.show();
            _.$nextArrow.show();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.show();
        }
    };
    Slick.prototype.keyHandler = function(event) {
        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };
    Slick.prototype.lazyLoad = function() {
        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {
                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');
                imageToLoad.onload = function() {
                    image.animate({
                        opacity: 0
                    }, 100, function() {
                        image.attr('src', imageSource).animate({
                            opacity: 1
                        }, 200, function() {
                            image.removeAttr('data-lazy').removeClass('slick-loading');
                        });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    });
                };
                imageToLoad.onerror = function() {
                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };
                imageToLoad.src = imageSource;
            });
        }
        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }
        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };
    Slick.prototype.loadSlider = function() {
        var _ = this;
        _.setPosition();
        _.$slideTrack.css({
            opacity: 1
        });
        _.$slider.removeClass('slick-loading');
        _.initUI();
        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };
    Slick.prototype.next = Slick.prototype.slickNext = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };
    Slick.prototype.orientationChange = function() {
        var _ = this;
        _.checkResponsive();
        _.setPosition();
    };
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
        var _ = this;
        _.autoPlayClear();
        _.paused = true;
    };
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
        var _ = this;
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };
    Slick.prototype.postSlide = function(index) {
        var _ = this;
        if (!_.unslicked) {
            _.$slider.trigger('afterChange', [_, index]);
            _.animating = false;
            _.setPosition();
            _.swipeLeft = null;
            if (_.options.autoplay) {
                _.autoPlay();
            }
            if (_.options.accessibility === true) {
                _.initADA();
            }
        }
    };
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };
    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };
    Slick.prototype.progressiveLazyLoad = function(tryCount) {
        tryCount = tryCount || 1;
        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageToLoad;
        if ($imgsToLoad.length) {
            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');
            imageToLoad.onload = function() {
                image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');
                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }
                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };
            imageToLoad.onerror = function() {
                if (tryCount < 3) {
                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function() {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {
                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                    _.progressiveLazyLoad();
                }
            };
            imageToLoad.src = imageSource;
        } else {
            _.$slider.trigger('allImagesLoaded', [_]);
        }
    };
    Slick.prototype.refresh = function(initializing) {
        var _ = this,
            currentSlide, lastVisibleIndex;
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
            _.currentSlide = lastVisibleIndex;
        }
        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
        currentSlide = _.currentSlide;
        _.destroy(true);
        $.extend(_, _.initials, {
            currentSlide: currentSlide
        });
        _.init();
        if (!initializing) {
            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };
    Slick.prototype.registerBreakpoints = function() {
        var _ = this,
            breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;
        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
            _.respondTo = _.options.respondTo || 'window';
            for (breakpoint in responsiveSettings) {
                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }
            _.breakpoints.sort(function(a, b) {
                return (_.options.mobileFirst) ? a - b : b - a;
            });
        }
    };
    Slick.prototype.reinit = function() {
        var _ = this;
        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
        _.slideCount = _.$slides.length;
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
        _.registerBreakpoints();
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
        _.checkResponsive(false, true);
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        _.setPosition();
        _.focusHandler();
        _.paused = !_.options.autoplay;
        _.autoPlay();
        _.$slider.trigger('reInit', [_]);
    };
    Slick.prototype.resize = function() {
        var _ = this;
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }
        _.unload();
        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.setCSS = function(position) {
        var _ = this,
            positionProps = {},
            x, y;
        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
        positionProps[_.positionProp] = position;
        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };
    Slick.prototype.setDimensions = function() {
        var _ = this;
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }
        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };
    Slick.prototype.setFade = function() {
        var _ = this,
            targetLeft;
        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });
        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };
    Slick.prototype.setHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */
        var _ = this,
            l, item, option, value, refresh = false,
            type;
        if ($.type(arguments[0]) === 'object') {
            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {
            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];
            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {
                type = 'single';
            }
        }
        if (type === 'single') {
            _.options[option] = value;
        } else if (type === 'multiple') {
            $.each(option, function(opt, val) {
                _.options[opt] = val;
            });
        } else if (type === 'responsive') {
            for (item in value) {
                if ($.type(_.options.responsive) !== 'array') {
                    _.options.responsive = [value[item]];
                } else {
                    l = _.options.responsive.length - 1;
                    // loop through the responsive object and splice out duplicates.
                    while (l >= 0) {
                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                            _.options.responsive.splice(l, 1);
                        }
                        l--;
                    }
                    _.options.responsive.push(value[item]);
                }
            }
        }
        if (refresh) {
            _.unload();
            _.reinit();
        }
    };
    Slick.prototype.setPosition = function() {
        var _ = this;
        _.setDimensions();
        _.setHeight();
        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }
        _.$slider.trigger('setPosition', [_]);
    };
    Slick.prototype.setProps = function() {
        var _ = this,
            bodyStyle = document.body.style;
        _.positionProp = _.options.vertical === true ? 'top' : 'left';
        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }
        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }
        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }
        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };
    Slick.prototype.setSlideClasses = function(index) {
        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;
        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
        _.$slides.eq(index).addClass('slick-current');
        if (_.options.centerMode === true) {
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.infinite === true) {
                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }
                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }
            _.$slides.eq(index).addClass('slick-center');
        } else {
            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {
                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {
                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }
        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }
    };
    Slick.prototype.setupInfinite = function() {
        var _ = this,
            i, slideIndex, infiniteCount;
        if (_.options.fade === true) {
            _.options.centerMode = false;
        }
        if (_.options.infinite === true && _.options.fade === false) {
            slideIndex = null;
            if (_.slideCount > _.options.slidesToShow) {
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }
                for (i = _.slideCount; i > (_.slideCount - infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });
            }
        }
    };
    Slick.prototype.interrupt = function(toggle) {
        var _ = this;
        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };
    Slick.prototype.selectHandler = function(event) {
        var _ = this;
        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
        var index = parseInt(targetElement.attr('data-slick-index'));
        if (!index) index = 0;
        if (_.slideCount <= _.options.slidesToShow) {
            _.setSlideClasses(index);
            _.asNavFor(index);
            return;
        }
        _.slideHandler(index);
    };
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this,
            navTarget;
        sync = sync || false;
        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }
        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }
        if (sync === false) {
            _.asNavFor(index);
        }
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }
        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }
        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }
        _.animating = true;
        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
        _.setSlideClasses(_.currentSlide);
        if (_.options.asNavFor) {
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');
            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }
        _.updateDots();
        _.updateArrows();
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
                _.fadeSlideOut(oldSlide);
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }
        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };
    Slick.prototype.startLoad = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.hide();
        }
        _.$slider.addClass('slick-loading');
    };
    Slick.prototype.swipeDirection = function() {
        var xDist, yDist, r, swipeAngle, _ = this;
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }
        return 'vertical';
    };
    Slick.prototype.swipeEnd = function(event) {
        var _ = this,
            slideCount,
            direction;
        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;
        if (_.touchObject.curX === undefined) {
            return false;
        }
        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }
        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            direction = _.swipeDirection();
            switch (direction) {
                case 'left':
                case 'down':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.currentDirection = 0;
                    break;
                case 'right':
                case 'up':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.currentDirection = 1;
                    break;
                default:
            }
            if (direction != 'vertical') {
                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };
    Slick.prototype.swipeHandler = function(event) {
        var _ = this;
        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }
        switch (event.data.action) {
            case 'start':
                _.swipeStart(event);
                break;
            case 'move':
                _.swipeMove(event);
                break;
            case 'end':
                _.swipeEnd(event);
                break;
        }
    };
    Slick.prototype.swipeMove = function(event) {
        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }
        curLeft = _.getLeft(_.currentSlide);
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }
        swipeDirection = _.swipeDirection();
        if (swipeDirection === 'vertical') {
            return;
        }
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }
        swipeLength = _.touchObject.swipeLength;
        _.touchObject.edgeHit = false;
        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }
        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }
        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }
        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }
        _.setCSS(_.swipeLeft);
    };
    Slick.prototype.swipeStart = function(event) {
        var _ = this,
            touches;
        _.interrupted = true;
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
        _.dragging = true;
    };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
        var _ = this;
        if (_.$slidesCache !== null) {
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.unload = function() {
        var _ = this;
        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }
        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };
    Slick.prototype.unslick = function(fromBreakpoint) {
        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };
    Slick.prototype.updateArrows = function() {
        var _ = this,
            centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };
    Slick.prototype.updateDots = function() {
        var _ = this;
        if (_.$dots !== null) {
            _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
        }
    };
    Slick.prototype.visibility = function() {
        var _ = this;
        if (_.options.autoplay) {
            if (document[_.hidden]) {
                _.interrupted = true;
            } else {
                _.interrupted = false;
            }
        }
    };
    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);
            else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
}));;
/**
 * @file
 * Adapted from underscore.js with the addition Drupal namespace.
 */
/**
 * Limits the invocations of a function in a given time frame.
 *
 * The debounce function wrapper should be used sparingly. One clear use case
 * is limiting the invocation of a callback attached to the window resize event.
 *
 * Before using the debounce function wrapper, consider first whether the
 * callback could be attached to an event that fires less frequently or if the
 * function can be written in such a way that it is only invoked under specific
 * conditions.
 *
 * @param {function} func
 *   The function to be invoked.
 * @param {number} wait
 *   The time period within which the callback function should only be
 *   invoked once. For example if the wait period is 250ms, then the callback
 *   will only be called at most 4 times per second.
 * @param {bool} immediate
 *   Whether we wait at the beginning or end to execute the function.
 *
 * @return {function}
 *   The debounced function.
 */
Drupal.debounce = function(func, wait, immediate) {
    'use strict';
    var timeout;
    var result;
    return function() {
        var context = this;
        var args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
        }
        return result;
    };
};;
/*! jquery.cookie v1.4.1 | MIT */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }

    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
        } catch (b) {}
    }

    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g,
        h = a.cookie = function(e, g, i) {
            if (void 0 !== g && !a.isFunction(g)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j)
                }
                return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = c(p.shift()),
                    r = p.join("=");
                if (e && e === q) {
                    l = f(r, g);
                    break
                }
                e || void 0 === (r = f(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b))
    }
});;
/**
 * @file
 * Form features.
 */
/**
 * Triggers when a value in the form changed.
 *
 * The event triggers when content is typed or pasted in a text field, before
 * the change event triggers.
 *
 * @event formUpdated
 */
(function($, Drupal, debounce) {
    'use strict';
    /**
     * Retrieves the summary for the first element.
     *
     * @return {string}
     *   The text of the summary.
     */
    $.fn.drupalGetSummary = function() {
        var callback = this.data('summaryCallback');
        return (this[0] && callback) ? $.trim(callback(this[0])) : '';
    };
    /**
     * Sets the summary for all matched elements.
     *
     * @param {function} callback
     *   Either a function that will be called each time the summary is
     *   retrieved or a string (which is returned each time).
     *
     * @return {jQuery}
     *   jQuery collection of the current element.
     *
     * @fires event:summaryUpdated
     *
     * @listens event:formUpdated
     */
    $.fn.drupalSetSummary = function(callback) {
        var self = this;
        // To facilitate things, the callback should always be a function. If it's
        // not, we wrap it into an anonymous function which just returns the value.
        if (typeof callback !== 'function') {
            var val = callback;
            callback = function() {
                return val;
            };
        }
        return this.data('summaryCallback', callback)
            // To prevent duplicate events, the handlers are first removed and then
            // (re-)added.
            .off('formUpdated.summary').on('formUpdated.summary', function() {
                self.trigger('summaryUpdated');
            })
            // The actual summaryUpdated handler doesn't fire when the callback is
            // changed, so we have to do this manually.
            .trigger('summaryUpdated');
    };
    /**
     * Prevents consecutive form submissions of identical form values.
     *
     * Repetitive form submissions that would submit the identical form values
     * are prevented, unless the form values are different to the previously
     * submitted values.
     *
     * This is a simplified re-implementation of a user-agent behavior that
     * should be natively supported by major web browsers, but at this time, only
     * Firefox has a built-in protection.
     *
     * A form value-based approach ensures that the constraint is triggered for
     * consecutive, identical form submissions only. Compared to that, a form
     * button-based approach would (1) rely on [visible] buttons to exist where
     * technically not required and (2) require more complex state management if
     * there are multiple buttons in a form.
     *
     * This implementation is based on form-level submit events only and relies
     * on jQuery's serialize() method to determine submitted form values. As such,
     * the following limitations exist:
     *
     * - Event handlers on form buttons that preventDefault() do not receive a
     *   double-submit protection. That is deemed to be fine, since such button
     *   events typically trigger reversible client-side or server-side
     *   operations that are local to the context of a form only.
     * - Changed values in advanced form controls, such as file inputs, are not
     *   part of the form values being compared between consecutive form submits
     *   (due to limitations of jQuery.serialize()). That is deemed to be
     *   acceptable, because if the user forgot to attach a file, then the size of
     *   HTTP payload will most likely be small enough to be fully passed to the
     *   server endpoint within (milli)seconds. If a user mistakenly attached a
     *   wrong file and is technically versed enough to cancel the form submission
     *   (and HTTP payload) in order to attach a different file, then that
     *   edge-case is not supported here.
     *
     * Lastly, all forms submitted via HTTP GET are idempotent by definition of
     * HTTP standards, so excluded in this implementation.
     *
     * @type {Drupal~behavior}
     */
    Drupal.behaviors.formSingleSubmit = {
        attach: function() {
            function onFormSubmit(e) {
                var $form = $(e.currentTarget);
                var formValues = $form.serialize();
                var previousValues = $form.attr('data-drupal-form-submit-last');
                if (previousValues === formValues) {
                    e.preventDefault();
                } else {
                    $form.attr('data-drupal-form-submit-last', formValues);
                }
            }
            $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
        }
    };
    /**
     * Sends a 'formUpdated' event each time a form element is modified.
     *
     * @param {HTMLElement} element
     *   The element to trigger a form updated event on.
     *
     * @fires event:formUpdated
     */
    function triggerFormUpdated(element) {
        $(element).trigger('formUpdated');
    }
    /**
     * Collects the IDs of all form fields in the given form.
     *
     * @param {HTMLFormElement} form
     *   The form element to search.
     *
     * @return {Array}
     *   Array of IDs for form fields.
     */
    function fieldsList(form) {
        var $fieldList = $(form).find('[name]').map(function(index, element) {
            // We use id to avoid name duplicates on radio fields and filter out
            // elements with a name but no id.
            return element.getAttribute('id');
        });
        // Return a true array.
        return $.makeArray($fieldList);
    }
    /**
     * Triggers the 'formUpdated' event on form elements when they are modified.
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attaches formUpdated behaviors.
     * @prop {Drupal~behaviorDetach} detach
     *   Detaches formUpdated behaviors.
     *
     * @fires event:formUpdated
     */
    Drupal.behaviors.formUpdated = {
        attach: function(context) {
            var $context = $(context);
            var contextIsForm = $context.is('form');
            var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
            var formFields;
            if ($forms.length) {
                // Initialize form behaviors, use $.makeArray to be able to use native
                // forEach array method and have the callback parameters in the right
                // order.
                $.makeArray($forms).forEach(function(form) {
                    var events = 'change.formUpdated input.formUpdated ';
                    var eventHandler = debounce(function(event) {
                        triggerFormUpdated(event.target);
                    }, 300);
                    formFields = fieldsList(form).join(',');
                    form.setAttribute('data-drupal-form-fields', formFields);
                    $(form).on(events, eventHandler);
                });
            }
            // On ajax requests context is the form element.
            if (contextIsForm) {
                formFields = fieldsList(context).join(',');
                // @todo replace with form.getAttribute() when #1979468 is in.
                var currentFields = $(context).attr('data-drupal-form-fields');
                // If there has been a change in the fields or their order, trigger
                // formUpdated.
                if (formFields !== currentFields) {
                    triggerFormUpdated(context);
                }
            }
        },
        detach: function(context, settings, trigger) {
            var $context = $(context);
            var contextIsForm = $context.is('form');
            if (trigger === 'unload') {
                var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
                if ($forms.length) {
                    $.makeArray($forms).forEach(function(form) {
                        form.removeAttribute('data-drupal-form-fields');
                        $(form).off('.formUpdated');
                    });
                }
            }
        }
    };
    /**
     * Prepopulate form fields with information from the visitor browser.
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attaches the behavior for filling user info from browser.
     */
    Drupal.behaviors.fillUserInfoFromBrowser = {
        attach: function(context, settings) {
            var userInfo = ['name', 'mail', 'homepage'];
            var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
            if ($forms.length) {
                userInfo.map(function(info) {
                    var $element = $forms.find('[name=' + info + ']');
                    var browserData = localStorage.getItem('Drupal.visitor.' + info);
                    var emptyOrDefault = ($element.val() === '' || ($element.attr('data-drupal-default-value') === $element.val()));
                    if ($element.length && emptyOrDefault && browserData) {
                        $element.val(browserData);
                    }
                });
            }
            $forms.on('submit', function() {
                userInfo.map(function(info) {
                    var $element = $forms.find('[name=' + info + ']');
                    if ($element.length) {
                        localStorage.setItem('Drupal.visitor.' + info, $element.val());
                    }
                });
            });
        }
    };
})(jQuery, Drupal, Drupal.debounce);;

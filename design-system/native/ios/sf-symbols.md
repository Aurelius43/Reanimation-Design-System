# SF Symbols map

Every Reanimation icon name and the SF Symbol it becomes on iOS and iPadOS. Use `RAIcon` in Swift (`ReanimationIcons.swift`) instead of typing symbol names.

Rules: Regular weight; hierarchical rendering when state needs emphasis; use the **selected** column for the selected tab or a high-salience state. Change the color between states, not the glyph. Size with the text style (`.imageScale`/`.font`), never fixed points. Rows marked **verify** are the nearest system match — check them in the SF Symbols app before shipping.

| Reanimation name | SF Symbol | Selected | Swift | Notes |
| --- | --- | --- | --- | --- |
| `add` | `plus` | — | `RAIcon.add` |  |
| `arrow-right` | `arrow.right` | — | `RAIcon.arrowRight` | Mirrors automatically in right-to-left layouts. |
| `close` | `xmark` | — | `RAIcon.close` |  |
| `expand` | `arrow.up.left.and.arrow.down.right` | — | `RAIcon.expand` |  |
| `folder-lock` | `lock.rectangle` | `lock.rectangle.fill` | `RAIcon.folderLock` | Nearest system match. Prefer exporting the authored folder-lock SVG as a custom symbol. **verify** |
| `radio` | `dot.radiowaves.left.and.right` | — | `RAIcon.radio` | Broadcast / output signal. |
| `play` | `play.fill` | — | `RAIcon.play` | Transport glyphs are filled. |
| `pause` | `pause.fill` | — | `RAIcon.pause` |  |
| `stop` | `stop.fill` | — | `RAIcon.stop` |  |
| `loading` | — | — | `RAIcon.loading` | No symbol: use ProgressView(). |
| `connect-outline` | `antenna.radiowaves.left.and.right` | `antenna.radiowaves.left.and.right` | `RAIcon.connect` | Connect tab. No filled variant exists; selection comes from the tab tint. |
| `control-outline` | `slider.horizontal.3` | `slider.horizontal.3` | `RAIcon.control` | Control tab. No filled variant exists; selection comes from the tab tint. |
| `library-outline` | `books.vertical` | `books.vertical.fill` | `RAIcon.library` | Library tab. |
| `scenes-outline` | `square.stack` | `square.stack.fill` | `RAIcon.scenes` | Scenes tab. |
| `chevron-right` | `chevron.right` | — | `RAIcon.chevronRight` | Mirrors in right-to-left layouts. |
| `chevron-left` | `chevron.left` | — | `RAIcon.chevronLeft` | Mirrors in right-to-left layouts. |
| `chevron-down` | `chevron.down` | — | `RAIcon.chevronDown` |  |
| `chevron-up` | `chevron.up` | — | `RAIcon.chevronUp` |  |
| `check` | `checkmark` | — | `RAIcon.check` |  |
| `x` | `xmark` | — | `RAIcon.x` |  |
| `filter` | `line.3.horizontal.decrease` | — | `RAIcon.filter` |  |
| `audio-lines` | `waveform` | — | `RAIcon.audioLines` |  |
| `more` | `ellipsis` | — | `RAIcon.more` | iOS uses the horizontal ellipsis for More, so both web glyphs map here. |
| `more-h` | `ellipsis` | — | `RAIcon.moreH` |  |
| `sidebar` | `sidebar.left` | — | `RAIcon.sidebar` | iPad sidebar toggle. |
| `lock` | `lock` | `lock.fill` | `RAIcon.lock` |  |
| `info` | `info.circle` | — | `RAIcon.info` |  |
| `alert` | `exclamationmark.triangle` | `exclamationmark.triangle.fill` | `RAIcon.alert` | Filled for high-salience warnings. |
| `circle-check` | `checkmark.circle` | `checkmark.circle.fill` | `RAIcon.circleCheck` |  |
| `circle-x` | `xmark.circle` | `xmark.circle.fill` | `RAIcon.circleX` |  |
| `search` | `magnifyingglass` | — | `RAIcon.search` |  |
| `calendar` | `calendar` | — | `RAIcon.calendar` |  |
| `clock` | `clock` | — | `RAIcon.clock` |  |
| `upload` | `tray.and.arrow.up` | — | `RAIcon.upload` | Import / upload. Use square.and.arrow.up only for Share. |
| `volume` | `speaker.wave.2` | `speaker.wave.2.fill` | `RAIcon.volume` |  |
| `volume-x` | `speaker.slash` | `speaker.slash.fill` | `RAIcon.volumeX` |  |
| `skip-forward` | `forward.end.fill` | — | `RAIcon.skipForward` |  |
| `skip-back` | `backward.end.fill` | — | `RAIcon.skipBack` |  |
| `menu` | `line.3.horizontal` | — | `RAIcon.menu` | Not for navigation: no hamburger menus on iPad. Use a sidebar toggle. |
| `home` | `house` | `house.fill` | `RAIcon.home` |  |
| `user` | `person` | `person.fill` | `RAIcon.user` |  |
| `settings` | `gearshape` | `gearshape.fill` | `RAIcon.settings` |  |
| `edit` | `pencil` | — | `RAIcon.edit` |  |
| `trash` | `trash` | `trash.fill` | `RAIcon.trash` |  |
| `copy` | `doc.on.doc` | — | `RAIcon.copy` |  |
| `grip` | `line.3.horizontal` | — | `RAIcon.grip` | List reordering draws its own handle in edit mode; use this only for custom drag handles. |
| `share` | `square.and.arrow.up` | — | `RAIcon.share` |  |
| `bluetooth` | `custom.bluetooth` | — | `RAIcon.bluetooth` | Custom symbol: Apple ships no Bluetooth symbol. Export the approved vector to the asset catalog as custom.bluetooth. |
| `signal` | `cellularbars` | — | `RAIcon.signal` | Device signal strength. Use Image(systemName:variableValue:) with 0…1. |
| `network` | `network` | — | `RAIcon.network` | Local network permission. |
| `bell` | `bell` | `bell.fill` | `RAIcon.bell` | Notifications permission. |
| `wifi` | `wifi` | — | `RAIcon.wifi` |  |
| `wifi-off` | `wifi.slash` | — | `RAIcon.wifiOff` | Offline banner. |

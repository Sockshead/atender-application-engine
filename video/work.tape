Output public/work.mp4
Set Shell "bash"
Set FontSize 25
Set Width 1500
Set Height 780
Set Padding 40
Set Theme { "name": "choko", "background": "#1A1815", "foreground": "#F0E8D6", "green": "#2E7D32", "cursor": "#C25B2D", "black": "#0E0D0B", "white": "#F0E8D6" }
Set TypingSpeed 40ms
Hide
Type "cd /Users/sockshead/develop/atender-application-engine"
Enter
Show
Sleep 400ms
Type "git log --oneline -7"
Sleep 600ms
Enter
Sleep 2800ms
Type "git show --stat --oneline HEAD | head -7"
Sleep 600ms
Enter
Sleep 3200ms

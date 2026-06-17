Output public/team.mp4
Set Shell "bash"
Set FontSize 25
Set Width 1500
Set Height 880
Set Padding 40
Set Theme { "name": "choko", "background": "#1A1815", "foreground": "#F0E8D6", "green": "#2E7D32", "cursor": "#C25B2D", "black": "#0E0D0B", "white": "#F0E8D6" }
Set TypingSpeed 40ms
Hide
Type "cd /Users/sockshead/develop/atender-application-engine"
Enter
Show
Sleep 400ms
Type "ls .claude/agents/*.md | xargs -n1 basename | sed 's/.md//'"
Sleep 600ms
Enter
Sleep 2600ms
Type "cat .claude/agents/fleet-routing.json | python3 -m json.tool | sed -n '5,13p'"
Sleep 600ms
Enter
Sleep 3200ms

Back to top
=========

Back to top is exactly what it says on the tin, it adds a small button at the bottom right of the screen with an up arrow 
and smoothly scrolls the user back up. It only shows after a set distance has been scrolled.

###How to use

Include the plugin

```html
<script src="js/backToTop.min.js"></script>
```

###Initialise the plugin

```html
<script>
$(function(){
	$.backToTop();
});
</script>
```

###Options

<table>
	<tr>
		<td><strong>Option</strong></td>
		<td><strong>Default</strong></td>
		<td><strong>Description</strong></td>
	</tr>
	<tr>
		<td>fromTop</td>
		<td>50</td>
		<td>The distance from the top that the arrow shows</td>
	</tr>
</table>

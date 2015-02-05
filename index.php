<?php
$page_title = "Home";
require "templates/header.php";
?>
<?php
/*$var = '';
if (isset($page_title)) {
    echo "Home Page";
} */
?>
    <div id="heading">
        <h1>Control At Your Fingertips</h1>

        <h2>Syncease!</h2>
    </div>
<?php
require "templates/navigation.php";
?>
    <section id="middle">
        <h6>Welcome visitor you can <a class="inline_new" href="/login.php" target="blank">login</a> or create an <a
                class="inline_new" href="/contactus.php" target="blank">account</a></h6>
        <img id="next_thing" src="img/next_thing.jpg" alt="next_thing">
    </section>
    <section id="bottom">
        <div id="welcome_note">
            <h3>Consolidate Your Devices into One Dashboard</h3>

            <p>
                Keeping your mobile devices in sync is one of the best ways to help yourself stay productive when
                on-the-go! If you use multiple devices – a laptop, a desktop, a smartphone, a tablet – it’s important to
                set up your accounts and tools to sync across all of them. For example, if you use a virtual notebook,
                make sure your account is logged in on each of your devices and is set up to automatically sync. By
                syncing across devices, you can…</p>

            <p>
                Reduce digital clutter and minimize saving duplicate copies on portable drives</p>

            <p>
                Stay productive on-the-go anywhere in the world</p>

            <p>
                Travel light and avoid packing multiple notebooks or paper files</p>

            <p>
                Collaborate as a mobile worker and keep up-to-date with team members on project status easily</p>

            <p>
                Save time having to catch up at the end of the day because you’ve been “in the loop” all along</p>
        </div>
<?php
require "templates/footer.php";
?>
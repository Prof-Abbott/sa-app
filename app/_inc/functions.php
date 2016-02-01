<?php

function nav_menu($menu)
{
    $output = "<ul id=\"second-nav\" class=\"nav-collapse nav-2\">";
    foreach ($menu as $menu_item) {
        $output .= "<li class=\"drop-menu\"><a href=\"".get_url().$menu_item['url']."\" >";
        $output .= $menu_item['title']."</a>";
        if (isset($menu_item['dropdown'])) {
            $output .= "<ul>";
            foreach ($menu_item['dropdown'] as $title => $url) {
                $output .= "<li><a href=\"".get_url().$url."\" >";
                $output .= $title . "</a></li>";
            }
            $output .= "</ul>";
        }
        $output .= "</li>";
    }
    $output .= "</ul>";
    echo $output;
}

function nav_side_menu($menu, $section)
{
    $output = "<aside class=\"intro-menu\"><h3>Contents</h3><ul>";
    foreach ($menu as $menu_item) {
        if ($menu_item['title'] == $section) {
            $output .= "<ul>";
            foreach ($menu_item['dropdown'] as $title => $url) {
                $output .= "<li><a href=\"".get_url().$url."\" >";
                $output .= $title . "</a></li>";
            }
            $output .= "</ul>";
        }
    }
    $output .= "</ul></aside>";
    echo $output;
}

function footer_menu($menu)
{
    $output = "<ul>";
    foreach ($menu as $menu_item) {
        $output .= "<li><a href=\"".get_url().$menu_item['url']."\" >";
        $output .= $menu_item['title']."</a>";
        $output .= "</li>";
    }
    $output .= "</ul>";
    echo $output;
}


function page_nav($page_list, $page)
{
    $count        = count($page_list);
    $page_keys    = array_keys($page_list);
    $current_page = array_search('?page=2', $page_keys);
    $output       = "<div class=\"page-nav\">";
    if ($current_page != 0) {
        $prev_page = $current_page - 1;
        $output .= "<a href=\"".$page_keys[$prev_page]."\" >Prev</a> ";
    }
    $i = 0;
    foreach ($page_list as $url => $page_title) {
        $output .= "<a href=\"".$url."\" title=\"".$page_title."\" ";
        if ($i == $current_page) {
            $output .= "class=\"current\"";
        }
        $output .= ">";
        $output .= $i + 1;
        $output .= "</a> ";
        $i ++;
    }
    if ($current_page != ( $count - 1 )) {
        $next_page = $current_page + 1;
        $output .= "<a href=\"".$page_keys[$next_page]."\" >Next</a>";
    }
    $output .= "</div>";
    echo $output;
}

function blog_nav($blog_list, $date = null)
{
    $output = "<ul class=\"blog-nav\">";
    foreach ($blog_list as $post) {
        $output .= "<li><a href=\"".get_url()."/blog/?date=".$post['date']."\" ";
        if ($post['date'] == $date) {
            $output .= "class=\"current\"";
        }
        $output .= ">".$post['title']."<br><span>".date("j M Y", strtotime($post['date']))."</span></a></li>";
    }
    $output .= "</ul>";
    echo $output;
}

function get_post_title($blog_list, $date)
{
    if ($date == null) {
        $post_array = array_shift($blog_list);

        return $post_array['title'];
    } else {
        foreach ($blog_list as $post) {
            if ($post['date'] == $date) {
                return $post['title'];
            }
        }
    }

    return "";
}

function get_post($blog_list, $date)
{
    if ($date == null) {
        $post_array = array_shift($blog_list);
        $post       = 'posts/'.$post_array['date'].".html";
    } else {
        $post = 'posts/'.$date.".html";
    }

    return $post;
}
